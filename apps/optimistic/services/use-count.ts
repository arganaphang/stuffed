import type {
  UseQueryResult,
  UseMutationResult,
  QueryClient,
} from "@tanstack/react-query";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Count {
  count: number;
}

interface CountResponse {
  data: Count;
}

const fetchCount = async (): Promise<Count> => {
  const response = await axios.get<CountResponse>("/api/0");
  return response.data.data;
};

const incrementCount = async (increment: number): Promise<Count> => {
  const response = await axios.get<CountResponse>(`/api/${increment}`);
  return response.data.data;
};

export const useCount = (): UseQueryResult<Count> =>
  useQuery({
    queryKey: ["count"],
    queryFn: () => fetchCount(),
    initialData: () => {
      return { count: 1 };
    },
  });

export const useIncrementMutation = (
  queryClient: QueryClient,
): UseMutationResult<unknown, unknown, number> =>
  useMutation({
    mutationFn: (increment) => incrementCount(increment),
    onMutate: async (increment: number) => {
      await queryClient.cancelQueries(["count"]);
      const prevState = queryClient.getQueryData<Count>(["count"]);
      queryClient.setQueryData(["count"], {
        ...prevState,
        count: (prevState?.count || 1) + increment,
      });
      return { prevState };
    },
    onError: (_, __, ctx) => {
      queryClient.setQueryData(["count"], () => ctx?.prevState);
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["count"] });
    },
  });

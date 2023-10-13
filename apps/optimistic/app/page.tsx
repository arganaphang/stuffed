"use client";
import { Button } from "ui";
import { useQueryClient } from "@tanstack/react-query";
import { useCount, useIncrementMutation } from "@/services/use-count";

export default function Page(): JSX.Element {
  const { data } = useCount();
  const { mutate } = useIncrementMutation(useQueryClient());

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Button onClick={() => mutate(1)}>Count {data?.count || "    "}</Button>
    </div>
  );
}

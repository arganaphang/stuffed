import { Elysia, t } from "elysia";
import Redis from "ioredis";

const redis = new Redis();

const app = new Elysia()
  .get(
    "/:increment",
    async ({ params: { increment } }) => {
      const count = parseInt((await redis.get("count")) || "1") + increment;
      const result = await Promise.resolve({
        data: { count: count },
      });
      await redis.set("count", count);
      return result;
    },
    {
      params: t.Object({
        increment: t.Integer(),
      }),
    },
  )
  .listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

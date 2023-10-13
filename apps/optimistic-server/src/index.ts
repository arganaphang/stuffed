import { Elysia } from "elysia";
import Redis from "ioredis";

const redis = new Redis();

const app = new Elysia()
  .get("/", async () => {
    const count = parseInt((await redis.get("count")) || "1");
    const result = await Promise.resolve({
      data: { count: count },
    });
    await redis.set("count", count + 1);
    return result;
  })
  .listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

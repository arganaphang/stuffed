import { Elysia } from "elysia";

let count = 1;

const app = new Elysia()
  .get("/", () => {
    const result = { data: { count: count } };
    count++;
    return result;
  })
  .listen(8000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

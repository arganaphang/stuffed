export async function GET(request: Request): Promise<Response> {
  const path = `${new URL(request.url).pathname.replace("/api", "")}`;
  const res = await fetch(`${process.env.BASE_URL_API}${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...request.headers,
    },
  });
  const data: object = await res.json();
  return Response.json(data);
}

export async function POST(request: Request): Promise<Response> {
  const path = `${new URL(request.url).pathname.replace("/api", "")}`;
  const res = await fetch(`${process.env.BASE_URL_API}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...request.headers,
    },
    body: request.body,
  });
  const data: object = await res.json();
  return Response.json(data);
}

export async function PUT(request: Request): Promise<Response> {
  const path = `${new URL(request.url).pathname.replace("/api", "")}`;
  const res = await fetch(`${process.env.BASE_URL_API}${path}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...request.headers,
    },
    body: request.body,
  });
  const data: object = await res.json();
  return Response.json(data);
}

export async function PATCH(request: Request): Promise<Response> {
  const path = `${new URL(request.url).pathname.replace("/api", "")}`;
  const res = await fetch(`${process.env.BASE_URL_API}${path}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...request.headers,
    },
    body: request.body,
  });
  const data: object = await res.json();
  return Response.json(data);
}

export async function DELETE(request: Request): Promise<Response> {
  const path = `${new URL(request.url).pathname.replace("/api", "")}`;
  const res = await fetch(`${process.env.BASE_URL_API}${path}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...request.headers,
    },
    body: request.body,
  });
  const data: object = await res.json();
  return Response.json(data);
}

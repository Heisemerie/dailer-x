const baseURL = "http://127.0.0.1:8000/api/v1";

interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  params?: Record<string, string | number>;
  body?: unknown;
  headers?: HeadersInit;
}

async function apiFetch<T>(
  endpoint: string,
  { method = "GET", params = {}, body, headers = {} }: FetchOptions = {},
): Promise<T> {
  // initialize base url
  const url = new URL(baseURL + endpoint);

  // convert params object to array of key value pairs and append to the url
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });

  // set options and fetch data
  const response = await fetch(url.toString(), {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) throw new Error(`API error ${response.status}`);
  return response.json();
}

export class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (params?: Record<string, string | number>) => {
    return apiFetch<T>(this.endpoint, { params });
  };

  get = (id: number | string) => {
    return apiFetch<T>(`${this.endpoint}/${id}`);
  };

  post = <B>(body: B) => {
    return apiFetch<T>(this.endpoint, { method: "POST", body });
  };

  update = <B>(id: number | string, body: B) => {
    return apiFetch<T>(`${this.endpoint}/${id}`, {
      method: "PUT",
      body,
    });
  };

  delete = (id: number | string) => {
    return apiFetch<void>(`${this.endpoint}/${id}`, {
      method: "DELETE",
    });
  };
}

import { LoaderFunctionArgs } from "react-router-dom";

export const getQuery = (request: LoaderFunctionArgs["request"]) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("q");

  return query;
};

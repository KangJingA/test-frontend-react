import http from "./httpService";
import URI from "urijs";

export function search(search) {
  const uri = new URI(`${process.env.REACT_APP_API_REST_ENDPOINT}/users`);
  if (search) uri.addSearch({ search });
  return http.get(uri.toString());
}

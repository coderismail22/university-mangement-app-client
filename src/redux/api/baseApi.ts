import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { App } from "antd";
import { setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
      console.log("autho token", `${token}`);
    }
    return headers;
  },
});

//implementing custom baseQuery
const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  // console.log(result);
  if (result?.error?.status === 401) {
    console.log("Generating refresh token");
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    const token = data.data.accessToken;
    const user = (api.getState() as RootState).auth.user;
    api.dispatch(setUser({ user, token }));
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});

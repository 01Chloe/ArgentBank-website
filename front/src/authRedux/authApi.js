import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().persistedReducer.token
      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userInfos) => ({
        url: "user/login",
        method: "POST",
        body: userInfos,
      }),
    }),
    userInfos: builder.mutation({
      query: () => ({
        url: "user/profile",
        method: "POST",
      }),
    }),
    editUserName: builder.mutation({
      query: (newUserName) => ({
        url: "user/profile",
        method: "PUT",
        body: newUserName,
      }),
    }),
  }),
})

export const {
  useLoginUserMutation,
  useUserInfosMutation,
  useEditUserNameMutation,
} = authApi

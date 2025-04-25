/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/redux/api/baseApi";

const bicycleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBicycle: builder.mutation({
      query: (bicycleInfo: any) => ({
        url: "/bicycles",
        method: "POST",
        body: bicycleInfo,
      }),
      invalidatesTags: ["bicycle"],
    }),
    getBicycles: builder.query({
      query: (params: Record<string, unknown>) => ({
        url: "/bicycles",
        method: "GET",
        params,
      }),
      providesTags: ["bicycle"],
    }),
    getSingleBicycle: builder.query({
      query: (id: any) => ({
        url: `/bicycles/${id}`,
        method: "GET",
      }),
      providesTags: ["bicycle"],
    }),
    updateBicycle: builder.mutation({
      query: (args: { id: any; data: any }) => ({
        url: `/bicycles/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["bicycle"],
    }),
    deleteBicycle: builder.mutation({
      query: (id: any) => ({
        url: `/bicycles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bicycle"],
    }),
  }),
});

export const {
  useCreateBicycleMutation,
  useGetBicyclesQuery,
  useGetSingleBicycleQuery,
  useUpdateBicycleMutation,
  useDeleteBicycleMutation,
} = bicycleApi;

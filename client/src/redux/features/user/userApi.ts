import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/users",
      providesTags: ["user"],
    }),
    getSingleUser: builder.query({
      query: ({ userId }) => `/users/${userId}`,
      providesTags: ["user"],
    }),
    getMyProfile: builder.query({
      query: ({ email }) => `/users/profile/${email}`,
      providesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: ({ userId, updatedData }) => ({
        url: `/users/${userId}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: ({ userId }) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
    blockUser: builder.mutation({
      query: ({ userId }) => ({
        url: `/users/block/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetSingleUserQuery,
  useGetMyProfileQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useBlockUserMutation,
} = authApi;

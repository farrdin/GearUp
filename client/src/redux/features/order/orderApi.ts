import { baseApi } from "@/redux/api/baseApi";

const orderManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderInfo) => {
        return {
          url: "/orders/create-order",
          method: "POST",
          body: orderInfo,
        };
      },
    }),

    verifyPayment: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    orderRevenue: builder.query({
      query: () => ({
        url: "/orders/revenue",
        method: "GET",
      }),
      providesTags: ["revenue"],
    }),
    myOrder: builder.query({
      query: (email) => ({
        url: `/orders/my/${email}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),
    updateOrder: builder.mutation({
      query: ({ id, status }) => ({
        url: `/orders/update/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["order"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useVerifyPaymentQuery,
  useGetAllOrdersQuery,
  useMyOrderQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useOrderRevenueQuery,
} = orderManagementApi;

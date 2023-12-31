import { apiSlice } from './apiSlice';
import { ORDERS_URL, RAZORPAY_URL } from '../constants';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: order,
      }),
    }),
    getOrderDetails: builder.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    payOrder: builder.mutation({
      query: ({ orderId, details }) => ({
        url: `${ORDERS_URL}/${orderId}/pay`,
        method: 'PUT',
        body: details,
      }),
    }),
    getRazorpayClientId: builder.query({
      query: () => ({
        url: RAZORPAY_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getMyOrders: builder.query({
      query: (pageNumber) => ({
        url: `${ORDERS_URL}/mine`,
        params: { pageNumber },
      }),
      keepUnusedDataFor: 5,
    }),
    getOrders: builder.query({
      query: (pageNumber) => ({
        url: ORDERS_URL,
        params: { pageNumber },
      }),
      keepUnusedDataFor: 5,
    }),
    deliverOrder: builder.mutation({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}/deliver`,
        method: 'PUT',
      }),
    }),
    returnOrder: builder.mutation({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}/return`,
        method: 'PUT',
      }),
    }),
    getRevenue: builder.query({
      query: () => ({
        url: `${ORDERS_URL}/revenue`,
      }),
      keepUnusedDataFor: 5,
    })
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  usePayOrderMutation,
  useGetRazorpayClientIdQuery,
  useGetMyOrdersQuery,
  useGetOrdersQuery,
  useDeliverOrderMutation,
  useReturnOrderMutation,
  useGetRevenueQuery,
} = orderApiSlice;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_URI,
  }),
  endpoints: (builder) => ({

    // Medicines
    getMedicines: builder.query({
      query: () => "/medicine"
    }),
    getExpiredMedicines: builder.query({
      query: () => "/medicine?expired=expired"
    }),
    getUnStocks: builder.query({
      query: () => "/medicine?stock=stock"
    }),
    getSearchMedicine: builder.query({
      query: ({search}) => `/medicine?search=${search}`
    }),

    // members
    getMembers: builder.query({
      query: () => "/members"
    }),

    
    getSales: builder.query({
      query: ({ year, month }) => `/sales/${year}/${month}`
    }),
    getInvoice: builder.query({
      query: () => "/invoice"
    }),
    getHighSales: builder.query({
      query: ({ year, month }) => `/high/${year}/${month}`
    }),
    addMedicine: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data,
      })
    })
  }),
});

export const { useGetMedicinesQuery, useAddMedicineMutation, useGetMembersQuery, useGetSalesQuery, useGetInvoiceQuery, useGetHighSalesQuery, useGetUnStocksQuery, useGetSearchMedicineQuery, useGetExpiredMedicinesQuery } = apiSlice;
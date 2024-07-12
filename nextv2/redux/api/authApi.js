// const { default: medicixApi } = require("./medicixApi");
import { setUser } from "../slices/authSlice";
import medicixApi from "./medicixApi";

const authApi = medicixApi.injectEndpoints({
    endpoints: (builder) => ({
        csrfToken: builder.query({
            query: () => "/auth/csrf_cookie/",
            providesTags: ["Csrf"]
        }),
        login: builder.mutation({
            query: (data) => {
                return {
                    method: 'POST',
                    url: '/auth/login/',
                    body: data,
                }
            },
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                try{
                    const data = await queryFulfilled;
                    dispatch(setUser(data));
                }
                catch(error){
                    console.log(error)
                }
            }
        })
    }),
    overrideExisting: true
})

export const { useCsrfTokenQuery, useLoginMutation } = authApi;
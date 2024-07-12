import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { getCookie } from "libs/getcookie";

const medicixApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_LOCAL_HOST_URL,
        credentials: 'include',
        prepareHeaders: (headers, {getState}) => {
            const token = getState()?.auth?.user?.token;
            console.log(getState()?.auth)
            const csrftoken = getCookie('csrftoken')
            // const csrftoken = "zW9Xcu04fqdGTkT8kBzsrE1gBJPlaqGO"
            if (token) {
                headers.set("Authorization", `Token ${token}`);
            }
            if (csrftoken) {
                headers.set("X-CSRFToken", `${csrftoken}`)
            }
            return headers;
        }
    }),
    reducerPath: "medicixApi",
    tagTypes: ["Csrf"],
    endpoints: (builder) => ({}),
});

export default medicixApi;
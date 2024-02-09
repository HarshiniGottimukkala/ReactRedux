import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postApi = createApi({
    reducerPath: 'post',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPost: builder.query({
            query: (data) => ({
                url: "albums",
                method: "GET"
            })
        }),

        addPost: builder.mutation({
            query: (data) => ({
                url: "albums",
                method: "POST",
                body: data
            })
        }),
        getUser: builder.query({
            query: (data) => ({
                url: "users",
                method: "GEt"
            })
        }),
    })
})

export const { useGetPostQuery, useAddPostMutation, useGetUserQuery } = postApi
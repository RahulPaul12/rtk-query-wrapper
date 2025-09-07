
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from '@reduxjs/toolkit/query/react';
interface Post {
  id: number;
  title: string;
  body: string;
};

interface PostsResponse {
  posts: Post[];
  total: number;
  limit: number;
}
export const postapi = createApi({
    reducerPath:'postapi',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com'}),
    endpoints:(build) => ({
        getPost: build.query <PostsResponse[], void>({
            query: () => '/posts',
        })
    })
})
export const { useGetPostQuery } = postapi


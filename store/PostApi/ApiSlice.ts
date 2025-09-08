
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from '@reduxjs/toolkit/query/react';
export interface Post {
  id: number;
  title: string;
  body: string;
};

export interface PostsResponse {
  posts: Post[];
  total: number;
  limit: number;
}
export const postapi = createApi({
    reducerPath:'postapi',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com'}),
    endpoints:(build) => ({
        getPost: build.query <PostsResponse, void>({
            query: () => '/posts',
        }),
        getSinglePost: build.query<Post,number>({
          query: (id) => `/posts/${id}`,
        }),
        addNewPost: build.mutation({
          query: (newpost)=>({
            url:'/posts/add',
            headers:{ 'Content-Type' : 'application/json' },
            body:newpost
          })
        })
    })
})
export const { useGetPostQuery , useGetSinglePostQuery, useAddNewPostMutation , usePrefetch } = postapi


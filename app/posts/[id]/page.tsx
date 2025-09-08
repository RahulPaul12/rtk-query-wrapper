'use client'
import { useGetSinglePostQuery } from "@/store/PostApi/ApiSlice"
import { useParams } from "next/navigation"

export default function postDetails (){
    const {id}:any = useParams()
    const {data } = useGetSinglePostQuery(id)
    return (
        <section className="container my-10 !max-w-2xl">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-4 text-center">{data?.title}</h5>
            <p className="font-normal text-gray-700 mb-3">{data?.body}</p>
        </section>
        
    )
} 
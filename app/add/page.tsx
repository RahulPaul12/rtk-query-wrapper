/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useAddNewPostMutation } from "@/store/PostApi/ApiSlice"
import { useForm } from "react-hook-form"


export default function Add (){
    const [addNewPost ,{isLoading}] = useAddNewPostMutation()
    const {register, handleSubmit} = useForm()
    const onsubmit =async (data:any)=>{
       try{
          const result = await addNewPost(data).unwrap()
          console.log(result)
          alert('post added succesfully')
       }
       catch(error){
        console.log(error)
       }
    }
    return (
        <section className="container my-10">
            <form action="" onSubmit={handleSubmit(onsubmit)} className="rounded-lg p-6 max-w-2xl w-full mx-auto shadow-lg flex flex-col gap-4">
                <div className="flex flex-col">
                    <label htmlFor="" className="mb-1">Title</label>
                    <input type="text" {...register('title')} className="px-3 border border-gray-300 h-10 rounded-lg"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="mb-1">Description</label>
                    <textarea {...register('body')} className="px-3 border border-gray-300 h-10 rounded-lg"/>
                </div>
                <button type="submit" className="bg-green-600 py-2.5 w-full rounded-lg text-white cursor-pointer">Submit</button>
            </form>
        </section>
    )
}
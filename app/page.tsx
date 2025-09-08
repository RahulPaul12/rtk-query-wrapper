'use client'
import ProductCard from "@/components/ProductCard";
import { Post, useGetPostQuery } from "@/store/PostApi/ApiSlice";

export default function Home() {
  const {data, isLoading } = useGetPostQuery()
  console.log(data)
  const posts: Post[] = data?.posts ?? [];
  return (
    <section className="container my-10">
        
        <div className="grid grid-cols-4 gap-6">
          {
            posts.map((post: Post, index:number)=>(
              <ProductCard key={index} post={post}/>
            ))}
            
        </div>
    </section>
  );
}

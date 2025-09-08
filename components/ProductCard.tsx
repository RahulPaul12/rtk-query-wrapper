import { usePrefetch } from "@/store/PostApi/ApiSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";


interface Post {
  id: number;
  title: string;
  body: string;
};

export default function ProductCard ({post}:{post:Post}){
    const router = useRouter()
    const prefetchPost = usePrefetch('getSinglePost')
    const handleReadMore = () => {
    prefetchPost(post.id);
    router.push(`/posts/${post.id}`);
  };
    return (
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <div className="p-5">
                <Link href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{post.title}</h5>
                </Link>
                <p className="font-normal text-gray-700 mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <button onClick={handleReadMore} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                    Read more
                </button>
            </div>
        </div>
    )
}
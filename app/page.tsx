import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container">
        <div className="grid grid-cols-4 gap-6">
            <ProductCard/>
        </div>
    </section>
  );
}

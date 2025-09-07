import Link from "next/link";

export default function HeaderLayout (){
    return (
        <header className="h-16 flex justify-between items-center shadow-xl bg-white">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <Link href={''}>BlogPost</Link>
                    <div className="flex gap-8">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/add'}>Add New</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Buttons (){
    const router = useRouter()
    return (
       <div className="flex flex-col ">
        <div>
        <h1><center>NEXTJS LEARNINGS</center></h1>
        </div>
       <div className="flex gap-5 justify-center">
        <Link className="bg-red-300 p-2 m-2 rounded-lg" href="/Posts">Posts</Link>
        <Link className="bg-red-300 p-2 m-2 rounded-lg" href="/Nothing">Nothing</Link>
        <Link className="bg-red-300 p-2 m-2 rounded-lg" href="/Nothing/one">Nothing One</Link>
        <Link className="bg-red-300 p-2 m-2 rounded-lg" href="/Posts/Pages">Page</Link>
        <Link className="bg-red-300 p-2 m-2 rounded-lg" href="/Posts/2">Second id</Link>
        <Link className="bg-red-300 p-2 m-2 rounded-lg" href="/api/httpmethods">API Routes</Link>
        <Link className="bg-red-300 p-2 m-2 rounded-lg" href="/route1">First Route</Link>
        <Link className="bg-red-300 p-2 m-2 rounded-lg" href="/sitemap.xml">Sitemap</Link>
        <button style={{color:"blue"}} className="bg-slate-300 p-2 m-2 rounded-lg"onClick={()=>{router.push('/Posts/Dashboard')}}>Dashboard</button>
        </div>
    </div>)
}

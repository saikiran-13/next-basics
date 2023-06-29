import { headers } from "next/dist/client/components/headers";
export  async function GET(request){
    const headersList = headers()
    const host = headersList.get("Host");
    return new Response(`You Request is successfully done from ${host}`,{
        status:200,
        headers:{host}
    })
}

import { cookies } from "next/dist/client/components/headers"
export async function GET(request){
    const cookieStore = cookies()
    //Catching a cookie with token=12345
    const token = cookieStore.get('token')//Read only
    console.log(token)
    return new Response(`Response from Nextjs ,Your token is ${token.value}`,{
        status:200,
        headers:{"Set-Cookie":`token-${token.value+1}-modified!`}//Modify 
    })
}

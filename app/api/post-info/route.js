export async function POST(request){
    let body = await request.json()
    let {name,id} = body
    return new Response(`The request is sent to ${name} with id ${id}`)
}
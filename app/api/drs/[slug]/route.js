//Dynamic Route Segments
export async function GET(request,{params}){
  let {slug} =params
  return new Response(`The new value is ${slug}`)
    
}
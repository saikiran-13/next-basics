import React from 'react'

const Page = async ({params}) => {
  let data = await fetch(`https://jsonplaceholder.typicode.com/users/${params.PostId}`,{
    cache:'no-store'
  })
  data = [await data.json()]
  return (
    <div>
 <div>{params.PostId}</div>

 <div>{data.map((posts)=>{
        return <div key = {posts}>{JSON.stringify(posts)}</div>
 })}</div>
    </div>
   
  )
}

export default Page
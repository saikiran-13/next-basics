// "use client"
// import React, { useEffect } from 'react'


import { revalidatePath } from "next/cache"

// import { resolve } from "styled-jsx/css"



const page = async () => {
    const delay = new Promise((resolve,reject)=>{
        if(resolve){
            console.log("hi")
            setTimeout(()=>{resolve()},5000)
        }

      })

    await delay
    // window.location.reload()

//   const obj={
//     id:1,
//     name:"sai"
//   }
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await data.json()
      
    //   console.log(posts)
    


  return (
    <div><center>{posts.map((x,key)=>{
        return <div key={key}>{x.title}</div>
      })}</center></div>
    // <div>{JSON.stringify(posts)}</div>
  )
}

export default page

export default async function sitemap(){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = (await data.json()) 

    const allposts = posts.map((post)=>({
        url:`https://localhost:3001/${post.id}`,
        lastModified:new Date()
    }))
    return [...allposts]

}
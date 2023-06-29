let arr = [];
export async function GET(request) {
  // const data = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
  //     next:{revalidate:10}
  // })
  // const posts = await data.json()
  console.log(arr);
  return Response.json(arr[0]);
}

export async function POST(request) {
  const data = {
    name: 'simform',
  };
  arr.push(data);
  return Response.json({ data });
}

export async function PUT(request) {
  const body = await Response.json();
  let { name } = body;
  body.name = 'sai kiran';
  return Response.json({ name });
}

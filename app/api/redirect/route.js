import { redirect } from "next/navigation";

export async function GET(request){
    redirect("https://chat.openai.com/")
}
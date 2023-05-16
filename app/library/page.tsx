import { supabase } from "@/utils/supabase";

export const revalidate = 60

export default async function Home() {
  
  const {data:posts} = await supabase.from("apps_script_libraries").select("*")
  
  return (
 <div>
  Hi
  <pre>
    {JSON.stringify(posts,null,2)}
  </pre>
 </div>
  )
}

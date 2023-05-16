import { supabase } from "@/utils/supabase";

export default async function Home() {

  const {data:posts} = await supabase.from("apps_script_libraries").select("*")
  
  return (
 <div>
  <pre>
    {JSON.stringify(posts,null,2)}
  </pre>
 </div>
  )
}

import { supabase } from "@/utils/supabase";

// export const revalidate = 1

export default async function Home() {
  
  const {data:posts} = await (await supabase.from("apps_script_libraries").select("library_id").limit(10))
  
  return (
 <div>
  Hi
  <pre>
      {JSON.stringify(posts,null,2)}
  </pre>
 </div>
  )
}

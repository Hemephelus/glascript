import { supabase } from "@/utils/supabase";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data: library_id } = await supabase
    .from("apps_script_libraries")
    .select("library_id");
  return library_id ?? [];
}

export default async function Library({
  params: { library_id },
}: {
  params: { library_id: string };
}) {
  const { data: library } = await supabase
    .from("apps_script_libraries")
    .select()
    .match({ library_id })
    .single();
 

  if(!library){
    notFound()
  }

  return (
    <div>
     Hi
     <pre>
       {JSON.stringify(library,null,2)}
     </pre>
    </div>
     )
}

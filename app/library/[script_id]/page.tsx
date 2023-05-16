import { supabase } from "@/utils/supabase";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data: script_id } = await supabase
    .from("apps_script_libraries")
    .select("script_id");
  return script_id ?? [];
}

export default async function Library({
  params: { script_id },
}: {
  params: { script_id: string };
}) {
  const { data: library } = await supabase
    .from("apps_script_libraries")
    .select()
    .match({ script_id })
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

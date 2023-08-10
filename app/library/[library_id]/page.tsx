import { supabase } from "@/utils/supabase";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { library_id: string };
};

export async function generateMetadata({
  params: { library_id },
}: Props): Promise<Metadata> {
  const { data: library } = await supabase
    .from("apps_script_libraries")
    .select("description, library_name, author")
    .match({ library_id })
    .single();

  return {
    title: `${library?.library_name} | Read Me | Glascript`,
    description: `${library?.description} by ${library?.author}`,
  };
}

export default async function Library({ params: { library_id } }: Props) {
  const { data: library } = await supabase
    .from("apps_script_libraries")
    .select("library_id")
    .match({ library_id })
    .single();

  if (!library) {
    notFound();
  }

  return (
    <section className=" bg-background_sub p-4 rounded-lg shadow-card min-h-screen">
     <div className="flex flex-col gap-2">
     <p className="border-b pb-1">
        View Google Apps Script{" "}
        <a
          href={` https://script.google.com/macros/d/${library_id}/edit`}
          className="hover:text-secondary text-primary underline duration-300"
          target="_blank"
        >
          Code
        </a>{" "}
        and{" "}
        <a
          href={`  https://script.google.com/macros/library/versions/d/${library_id}`}
          className="hover:text-primary text-secondary underline duration-300"
          target="_blank"
        >
          Versions
        </a>
      </p>
      <p>No Read Me File</p>
     </div>
    </section>
  );
}

"use client";
import { supabase } from "@/utils/supabase";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "next/navigation";

export const revalidate = 60;

export default async function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const { data: posts } = await await supabase
    .from("apps_script_libraries")
    .select("library_name")
    .filter("library_name", "ilike", `${q}%`);

  return (
    <div>
      <SearchBar />
      
    </div>
  );
}

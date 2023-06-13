// export default function Page({ params, searchParams }: Props) {}
import { supabase } from "@/utils/supabase";
import SideBar from "./components/LibrarySideBar";
import { Suspense } from "react";
import LibraryHeader from "./components/LibraryHeader";

type Props = {
  params: { library_id: string };
  children: React.ReactNode;
};

// if (!librarySideBarDetails) {
//   notFound();
// }
export default async function SearchPageLayout({
  children,
  params: { library_id },
}: Props) {

  // sidebar data
  const { data: sideBarData } = await supabase
    .from("apps_script_libraries")
    .select(
      "user_id, repository_url, recommended_version, license_id, library_id, library_website"
    )
    .match({ library_id })
    .single();
  const sideBarDetails: LibrarySideBar = (await sideBarData) || null;

  // header data
  const { data: headerData } = await supabase
    .from("apps_script_libraries")
    .select("updated_at, library_id, description, library_name, author, views")
    .match({ library_id })
    .single();
  const headerDetails: LibraryHeader = (await headerData) || null;

  return (
    <section className="bg-foreground min-h-screen grid grid-rows-[auto,_1fr] w-full px-[5%]">
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Async Server Component */}
        <LibraryHeader libraryHeaderDetails={headerDetails} />
      </Suspense>
      <main className="grid grid-cols-[1fr,_auto] gap-4 relative py-8">
        {children}
        <Suspense fallback={<h2>Loading...</h2>}>
          {/* @ts-expect-error Async Server Component */}
          <SideBar librarySideBarDetails={sideBarDetails} />
        </Suspense>
      </main>
    </section>
  );
}

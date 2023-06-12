import { supabase } from "@/utils/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { getRelativeTimeString } from "@/utils/relativetime";
import { p } from "nextra/dist/types-fa5ec8b0";

const roboto = Roboto({
  weight: ["300", "400", "500"],
  style: "normal",
  subsets: ["latin"],
});

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

  if (!library) {
    notFound();
  }

  function formatDate(date: string = "") {
    const milliseconds = Date.parse(date);
    return getRelativeTimeString(milliseconds, "en");
  }

  return (
    <section className="bg-foreground min-h-screen grid grid-rows-[auto,_1fr] w-full px-[5%]">
      <header className="flex items-end border-b-primary py-1 border-b-2">
        <div className="flex-1">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg mobile-lg:text-xl">
              {library.library_name}
            </h1>

            <p
              className={` ${roboto.className} text-neutral_sub text-sm w-full  overflow-hidden whitespace-nowrap text-ellipsis`}
            >
              {library.description}
            </p>
          </div>
          <div
            className={`text-xs ${roboto.className} flex flex-wrap gap-4 text-neutral_sub`}
          >
            <p>
              <span className="text-primary">{library.author}</span>
            </p>
            <p>
              Updated: <span>{formatDate(library.updated_at)}</span>
            </p>
          </div>
        </div>

        <div className="flex gap-2 text-xs mobile-lg:text-sm font-light text-neutral_sub pt-2 flex-1 justify-end">
          <div className="flex gap-1 items-center">
            <Image
              src="/views.svg"
              alt="views"
              className=" "
              width={24}
              height={24}
              priority
            ></Image>
            <span>Views : {library.views}</span>
          </div>
          <div className="flex gap-1 items-center">
            <Image
              src="/recommend.svg"
              alt="recommend"
              className=" "
              width={24}
              height={24}
              priority
            ></Image>
            <span>
              <span className="hidden mobile-lg:inline">Recommended</span>{" "}
              Version : {library.recommended_version}
            </span>
          </div>
        </div>
      </header>
      <main className="grid grid-cols-[1fr,_auto] gap-4 relative py-8">
        <section className=" bg-background_sub p-4 rounded-lg shadow-card">
          No Read Me File
        </section>
        <aside className=" bg-background_sub  px-4 py-8 rounded-lg sticky top-24 h-fit w-[400px] shadow-card flex flex-col gap-3">
          <div>
            <p>Script ID</p>
            <div className="flex gap-1 bg-foreground_sub p-2 rounded-t border-b border-neutral_sub">
              <p className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
                {library.library_id}
              </p>
              <button>
                <Image
                  src="/copy.svg"
                  alt="copy"
                  className=" "
                  width={24}
                  height={24}
                  priority
                ></Image>
              </button>
            </div>
          </div>
          <div>
            <p>Repository</p>
            <div className="flex gap-1 bg-foreground_sub p-2 rounded-t border-b border-neutral_sub">
              {library.repository_url ? (
                <a
                  href={library.repository_url}
                  target="_blank"
                  className="w-full overflow-hidden whitespace-nowrap text-ellipsis"
                >
                  {library.repository_url}
                </a>
              ) : (
                <p className=" opacity-50">No Link</p>
              )}
            </div>
          </div>
          <div>
            <p>Website</p>
            <div className="flex gap-1 bg-foreground_sub p-2 rounded-t border-b border-neutral_sub">
              {library.library_website ? (
                <a
                  href={library.library_website}
                  target="_blank"
                  className="w-full overflow-hidden whitespace-nowrap text-ellipsis"
                >
                  {library.library_website}
                </a>
              ) : (
                <p className=" opacity-50">No Link</p>
              )}
            </div>
          </div>
          <div className="flex gap-2 w-full justify-center">
            <div className="flex-1">
              <p>Versions</p>
              <div className="flex gap-1 bg-foreground_sub p-2 rounded-t border-b border-neutral_sub">
                {library.recommended_version ? (
                  <p className="w-full overflow-hidden whitespace-nowrap text-ellipsis">
                    {library.recommended_version} (Recommended)
                  </p>
                ) : (
                  <p className=" opacity-50">No Link</p>
                )}
              </div>
            </div>
            <div className="flex-1">
              <p>License</p>
              <div className="flex gap-1 bg-foreground_sub p-2 rounded-t border-b border-neutral_sub">
                {library.license_id ? (
                  <a
                    href={library.license_id}
                    target="_blank"
                    className="w-full overflow-hidden whitespace-nowrap text-ellipsis"
                  >
                    {library.license_id}
                  </a>
                ) : (
                  <p className=" opacity-50">No Link</p>
                )}
              </div>
            </div>
          </div>
        </aside>
      </main>
    </section>
  );
}

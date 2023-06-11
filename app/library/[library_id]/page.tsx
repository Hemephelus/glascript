import { supabase } from "@/utils/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { getRelativeTimeString } from "@/utils/relativetime";

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
    <section className="bg-foreground min-h-screen">
      <header>
        <div className="flex flex-col gap-1">
          <h1 className="text-lg mobile-lg:text-xl">{library.library_name}</h1>

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

        <div className="flex gap-2 text-xs mobile-lg:text-sm font-light text-neutral_sub border-t-secondary border-t pt-2">
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
    </section>
  );
}

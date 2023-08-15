import DocsAside from "../content/DocsAside.md";
import { Roboto } from "next/font/google";



const roboto = Roboto({
  weight: ["100", "300", "400", "500"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "Documentation | Glascript",
  description: "Find the perfect Apps Script library for your project",
};

export default function SearchPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className={`${roboto.className} min-h-screen bg-foreground grid grid-cols-1 laptop:grid-cols-[1fr,_auto] px-2 mobile-lg:px-[5%] py-20 relative gap-2`}>
        <main className="flex flex-col items-end gap-2">
          <div className="w-full min-h-screen bg-background_sub p-2 tablet:p-4  rounded-lg">
            {children}
          </div>
        </main>
        <aside className="hidden laptop:flex laptop:flex-col sticky top-24 h-[50vh]">
          <DocsAside />
        </aside>
      </section>
    </>
  );
}

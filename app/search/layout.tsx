import { Suspense } from "react";
import SearchBar from "../components/SearchBar";

export const metadata = {
  title: "Search - Glascript",
  description: "Find the perfect Apps Script library for your project",
};

export default function SearchPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="px-[10%] tablet:px-[20%] pt-32 w-full">
        <SearchBar otherColor={false} />
      </div>
      <Suspense>{children}</Suspense>
    </section>
  );
}

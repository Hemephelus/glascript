import SearchBar from "../components/SearchBar";

export const metadata = {
  title: "Library | Glascript",
  description: "Find the perfect Apps Script library for your project",
};

export default function SearchPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-foreground flex flex-col items-end pt-24">
      <div className="px-[5%] w-[50%] ">
        <SearchBar otherColor={true} />
      </div>
      {children}
    </section>
  );
}

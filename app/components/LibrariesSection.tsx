import FilterAndSort from "./FilterAndSort";
import LibraryCard from "./LibraryCard";

interface LibrariesSectionProps {
  librariesData: Array<Library>;
  showFilterSort: boolean;
}

const LibrariesSection: React.FC<LibrariesSectionProps> = ({
  librariesData,
  showFilterSort,
}) => {
  return (
    <main className="bg-foreground w-full py-8 px-4 mobile-lg:px-[10%] laptop:px-[20%] space-y-4 my-8">
      {showFilterSort ? <FilterAndSort /> : <></>}
      <div className="flex flex-col gap-4">
        {librariesData?.map((library: Library) => (
          <div key={library.library_id}>
            <LibraryCard libraryData={library} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default LibrariesSection;

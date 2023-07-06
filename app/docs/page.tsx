import SearchBar from "../components/SearchBar";

export default async function docs() {
  return <div className="min-h-screen bg-foreground grid grid-cols-1 laptop:grid-cols-[350px,_1fr] mobile-lg:px-[5%] py-20 relative gap-2">
    <aside className="hidden laptop:flex sticky top-24 h-screen bg-background_sub p-2 rounded-lg">hi</aside>
    <main className="flex flex-col items-end gap-2">
      <div className="w-full tablet:w-3/5 min-w-[300px] tablet:min-w-[400px] p-2 mobile-lg:p-0 ">
      <SearchBar otherColor={true}/>
      </div>
      <div className="w-full h-screen bg-background_sub p-2 rounded-lg">hi</div>
    </main>
  </div>;
}

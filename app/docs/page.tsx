import SearchBar from "../components/SearchBar";

export default async function docs() {
  return <div className="min-h-screen bg-foreground grid grid-cols-[350px,_1fr] px-[5%] py-20">
    <aside className="">hi</aside>
    <main>
      <SearchBar otherColor={true}/>
      <div></div>
    </main>
  </div>;
}

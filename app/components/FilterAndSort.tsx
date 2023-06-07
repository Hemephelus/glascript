import Image from "next/image";

export default function FilterAndSort() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        <button className="p-1 hover:border-b-[1px] hover:border-secondary">Popular</button>
        <button className="p-1 hover:border-b-[1px] hover:border-secondary">Recent</button>
        </div>
      <button className="flex gap-2 items-center border-primary border-2 p-2 rounded">
        <span>Filter</span> <Image
          src="/filter-list.svg"
          alt="filter"
          className=" "
          width={24}
          height={24}
          priority
        ></Image>
      </button>
    </div>
  );
}

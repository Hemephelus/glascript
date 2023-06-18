export default function LoadingLibrary() {
  return (
    <section className="bg-foreground flex flex-col items-end pt-24 min-h-screen">
      <div className="px-[5%] w-[50%] ">
        <div className="flex w-full gap-1 relative z-10 animate-pulse">
          <div
            className={`  bg-foreground p-2 w-full outline-none rounded-l `}
          ></div>
          <div
            className={`bg-foreground p-2  rounded-r w-[32px] h-[32px]`}
          ></div>
        </div>
      </div>
    </section>
  );
}

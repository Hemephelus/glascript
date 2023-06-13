type Props = {
  params: { library_id: string };
};

export default function Library({ params: { library_id } }: Props) {
  return (
    <section className=" bg-background_sub p-4 rounded-lg shadow-card min-h-screen">
      <p className="border-b pb-1">
        View Google Apps Script{" "}
        <a
          href={` https://script.google.com/macros/d/${library_id}/edit`}
          className="hover:text-secondary text-primary underline duration-300"
          target="_blank"
        >
          Code
        </a> and <a
          href={`  https://script.google.com/macros/library/versions/d/${library_id}`}
          className="hover:text-primary text-secondary underline duration-300"
          target="_blank"
        >
          Versions
        </a>
      </p>
    </section>
  );
}

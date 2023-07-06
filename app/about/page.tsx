export default function About() {
  return (
    <div className="px-[10%] text-sm text-left  tablet:px-[20%] py-32 tablet:text-justify mobile-lg:text-lg flex flex-col gap-6 min-h-screen text-neutral_sub">
      <h1 className="text-xl mobile-lg:text-2xl text-neutral font-semibold">About Us</h1>
      <p>
        Glascript <span className="text-secondary">[</span> <span className="text-primary">Google Libraries For Apps Script</span> <span className="text-secondary">]</span> <span className="text-primary">- GLAS</span> is a website dedicated to helping
        Apps Script developers find, use, and share libraries.
      </p>

      <p>
        We believe that Apps Script libraries are a powerful way to improve the
        productivity of Apps Script developers. By providing a central location
        for developers to find, use, and share libraries, we hope to make it
        easier for developers to build better applications.
      </p>

      <div>
      <h3 className="text-lg mobile-lg:text-xl text-neutral_sub font-medium mb-2">Features</h3>

<ul className=" list-decimal space-y-3">
  <li>
    Searchable library: We have a searchable library of over 1,000
    Apps Script libraries. You can search by library name, description, or
    tags.
  </li>
  <li>
    Upload your own libraries: If you have developed an Apps Script
    library that you would like to share, you can upload it to our site.
  </li>
  <li>
    Automatic updates: When a library you have installed is updated,
    we will automatically update it for you. This way, you can always be
    sure that you are using the latest version of the library.
  </li>
  <li>
    Dependency tracking: We track the dependencies of each library
    in our library. This means that you can easily see which other
    libraries a library depends on.
  </li>
</ul>
      </div>

      <p>
        We hope you find the Apps Script Library Hub to be a valuable resource.
        If you have any questions or feedback, please feel free to contact us.
      </p>
    </div>
  );
}

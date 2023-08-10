import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
function generateSlug(str = "") {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const to = "aaaaeeeeiiiioooouuuunc------";
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h2: ({ children }) => (
      <h2
        style={{
          fontSize: "16px",
          marginTop: "12px",
          fontWeight: "500",
          textDecoration: "underline",
        }}
        id={generateSlug(children?.toString())}
      >
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p
        style={{
          marginLeft: "12px",
          fontSize: "14px",
          color: "#CCCCCC",
          fontFamily: "sans-serif, Roboto",
        }}
      >
        {children}
      </p>
    ),
    li: ({ children }) => (
      <li style={{ marginLeft: "12px" }}>
        {children}{" "}
      </li>
    ),
    // a: ({ children }) => (
    //   <a style={{ marginLeft: "12px" }}>
    //     {children}{" "}
    //   </a>
    // ),
    // ul: ({ children }) => <ul style={{ marginLeft: '12px',fontSize: "16px", color:"#CCCCCC", gap:"12px", display:"flex", flexDirection:"column"  }}>{children} </ul>,
    ol: ({ children }) => (
      <ol
        style={{
          marginLeft: "12px",
          fontSize: "14px",
          gap: "12px",
          display: "flex",
          flexDirection: "column",
          listStylePosition: "outside",
          listStyleType: "disc",
          color: "#CCCCCC",
          fontFamily: "sans-serif, Roboto"
        }}
      >
        {children}{" "}
      </ol>
    ),
    ...components,
  };
}

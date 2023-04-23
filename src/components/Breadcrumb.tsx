export default function Breadcrumb({
  page,
  blogTitle,
}: {
  page: "blogs" | "projects";
  blogTitle?: string | null;
}) {
  return (
    <>
      {page === "blogs" && (
        <>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href={"/"}>Awoldt</a>
              </li>
              <li className="breadcrumb-item">
                <a href={"/blog"}>Blogs</a>
              </li>
              {blogTitle! && (
                <>
                  <li className="breadcrumb-item active" aria-current="page">
                    {blogTitle}
                  </li>
                </>
              )}
            </ol>
          </nav>
        </>
      )}
      {page === "projects" && (
        <>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href={"/"}>Awoldt</a>
              </li>
              <li className="breadcrumb-item">
                <a href={"/projects"}>Projects</a>
              </li>
            </ol>
          </nav>
        </>
      )}
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
export default function Nav({ page }: { page: "projects" | "blogs" }) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        {page === "projects" && (
          <>
            <a className="navbar-brand" href={"/"} title="Return home">
              <img
                src="favicon.svg"
                alt="Logo"
                width="35"
                height="35"
                className="d-inline-block align-text-top mt-2"
              />
              Awoldt
            </a>

            <div className="d-flex">
              <a className="active-page">Blogs</a>
              <a className="nonactive-page" href={"/projects"}>
                Projects
              </a>
            </div>
          </>
        )}
        {page === "blogs" && (
          <>
            <a className="navbar-brand" href={"/"} title="Return home">
              <img
                src="favicon.svg"
                alt="Logo"
                width="35"
                height="35"
                className="d-inline-block align-text-top mt-2"
              />
              Awoldt
            </a>

            <div className="d-flex">
              <a className="nonactive-page" href={"/blog"}>
                Blogs
              </a>
              <a className="active-page">Projects</a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

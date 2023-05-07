import Image from "next/image";

export default function Nav({ page }: { page: "projects" | "blogs" }) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href={"/"} title="Return home">
          <Image
            src="favicon.svg"
            alt="Logo"
            width="35"
            height="35"
            className="d-inline-block align-text-top"
          />
          <span>Awoldt</span>
        </a>
        {page === "projects" && (
          <>
            <div className="d-flex">
              <a className="nonactive-page" href={"/blog"}>
                Blogs
              </a>
              <a className="active-page">Projects</a>
            </div>
          </>
        )}
        {page === "blogs" && (
          <>
            <div className="d-flex">
              <a className="active-page">Blogs</a>
              <a className="nonactive-page" href={"/projects"}>
                Projects
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

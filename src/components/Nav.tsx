/* eslint-disable @next/next/no-img-element */

export default function Nav({ page }: { page: "blogs" | "projects" }) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/favicon.ico" alt="favicon" />
          Awoldt
        </a>
        <div className="d-flex" role="search">
          {page === "blogs" && (
            <>
              <div style={{ marginRight: "20px" }}>
                <a href="/blogs">Blogs</a>
              </div>

              <div>
                <a href="/projects" style={{ textDecoration: "none" }}>
                  Projects
                </a>
              </div>
            </>
          )}
          {page === "projects" && (
            <>
              <div style={{ marginRight: "20px" }}>
                <a href="/blogs" style={{ textDecoration: "none" }}>
                  Blogs
                </a>
              </div>

              <div>
                <a href="/projects">Projects</a>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

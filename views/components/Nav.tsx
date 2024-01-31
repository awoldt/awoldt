import type { FC } from "hono/jsx";

const Nav: FC<{ currentPage: "articles" | "projects" }> = (props) => {
  return (
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Awoldt
        </a>
        {props.currentPage === "articles" && (
          <div class="d-flex">
            <div style="margin-right: 20px; text-decoration: underline">
              <a href="/articles">Articles</a>
            </div>
            <div>
              <a href="/projects" style="text-decoration: none">
                Projects
              </a>
            </div>
          </div>
        )}
        {props.currentPage === "projects" && (
          <div class="d-flex">
            <div style="margin-right: 20px">
              <a href="/articles">Articles</a>
            </div>
            <div style="text-decoration: underline">
              <a href="/projects" style="text-decoration: none">
                Projects
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

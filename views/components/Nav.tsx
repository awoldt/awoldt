import type { FC } from "hono/jsx";

const Nav: FC = () => {
  return (
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Awoldt
        </a>
        <div class="d-flex" role="search">
          <div style="margin-right: 20px">
            <a href="/articles">Articles</a>
          </div>
          <div>
            <a href="/projects" style="text-decoration: none">
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

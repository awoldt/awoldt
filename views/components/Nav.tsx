export default function Nav() {
  return (
    <>
      {" "}
      <nav class="navbar">
        <div
          class="container-fluid"
          style="background-color: #003863 !important;"
        >
          <div class="container navbar">
            <a class="navbar-brand" href="/" style="font-weight: 700">
              Awoldt
            </a>
            <div class="d-flex">
              <div style="margin-right: 20px;">
                <a href="/articles">Articles</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

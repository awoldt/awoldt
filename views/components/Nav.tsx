export default function Nav() {
  return (
    <nav class="navbar">
      <div
        class="container-fluid"
        style="background-color: #001b30 !important;"
      >
        <div class="container navbar">
          <a class="navbar-brand" href="/" style="font-weight: 900">
            Awoldt
          </a>

          <div class="d-flex justify-content-end flex-grow-1">
            <div style="margin-right: 20px;">
              <a href="/articles">Articles</a>
            </div>
            <div>
              <a href="/privacy">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

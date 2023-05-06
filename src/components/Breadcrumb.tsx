export default function Breadcrumb({
  blogTitle,
}: {
  blogTitle?: string | null;
}) {
  return (
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
  );
}

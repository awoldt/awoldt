export default function BlogPreviewDiv({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a href={href} className="blog-preview-link">
      <div className="blog-div">
        <h2 className="blog-preview-title">{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}

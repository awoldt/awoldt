/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function BlogPreviewDiv({
  img,
  title,
  href,
}: {
  img: string;
  title: string;
  href: string;
}) {
  return (
    <div className="blog-div">
      <a href={href} className="blog-preview-link">
        <img src={img} className="img-fluid blog-preview-img" />
        <h2 className="blog-preview-title">{title}</h2>
      </a>
    </div>
  );
}

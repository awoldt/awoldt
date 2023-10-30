export default function BlogShowcase({
  title,
  link,
  description,
  imgUrl,
}: {
  title: string;
  link: string;
  description: string;
  imgUrl: string;
}) {
  return (
    <a href={link} style={{ textDecoration: "none" }}>
      <div>
        <div style={{ display: "inline-block", marginRight: "15px" }}>
          <img
            src={imgUrl}
            style={{ width: "350px" }}
            className="img-fluid"
            alt="spotify client id location in app settings"
          />
        </div>
        <div style={{ display: "inline-block" }}>
          <span style={{ fontSize: "30px", color: "white", fontWeight: "900" }}>
            {title}
          </span>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "normal",
              color: "white",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );
}

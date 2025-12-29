interface OgMetaTagsProps {
  title: string;
  description: string;
  url: string;
  image: string | null;
}

export default function OgMetaTags({
  title,
  description,
  url,
  image,
}: OgMetaTagsProps) {
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      {image !== null && (
        <meta property="og:image" content={`https://awoldt.dev${image}`} />
      )}
    </>
  );
}

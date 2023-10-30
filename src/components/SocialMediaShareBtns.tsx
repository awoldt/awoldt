export default function ShareBtns({ pageUrl }: { pageUrl: string }) {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css"
        rel="stylesheet"
      />

      <div className="shareon" style={{ float: "none" }}>
        <a
          className="facebook"
          href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
        ></a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}
          className="linkedin"
        ></a>
        <a
          className="reddit"
          href={`https://www.reddit.com/submit?url=${pageUrl}`}
        ></a>
        <a
          className="twitter"
          href={`https://twitter.com/intent/tweet?url=${pageUrl}`}
        ></a>
        <a className="copy-url"></a>
      </div>
    </>
  );
}

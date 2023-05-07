"use client";
export default function SocialShareBtns() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.min.css"
        rel="stylesheet"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/shareon@2/dist/shareon.iife.js"
        defer
      ></script>
      <div className="shareon">
        <a
          className="facebook"
          title="Share to Facebook"
          href={
            "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fawoldt.com%2Fblog%2Fpython-hangman"
          }
        ></a>
        <a
          className="linkedin"
          title="Share to LinkedIn"
          href={
            "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fawoldt.com%2Fblog%2Fpython-hangman"
          }
        ></a>
        <a
          className="reddit"
          title="Share to Reddit"
          href={
            "https://www.reddit.com/submit?url=https%3A%2F%2Fawoldt.com%2Fblog%2Fpython-hangman"
          }
        ></a>
        <a
          className="telegram"
          title="Share to Telegram"
          href={
            "https://telegram.me/share/url?url=https%3A%2F%2Fawoldt.com%2Fblog%2Fpython-hangman"
          }
        ></a>
        <a
          className="twitter"
          title="Share to Twitter"
          href={
            "https://twitter.com/intent/tweet?url=https%3A%2F%2Fawoldt.com%2Fblog%2Fpython-hangman"
          }
        ></a>
        <div
          className="copy-url"
          onClick={() => {
            navigator.clipboard.writeText(
              "https://awoldt.com/blog/python-hangman"
            );
          }}
        ></div>
      </div>
    </>
  );
}

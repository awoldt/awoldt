/* eslint-disable @next/next/no-img-element */

import { SetStateAction } from "react";
import BlogPreviewDiv from "./BlogPreviewDiv";

/* eslint-disable @next/next/no-html-link-for-pages */
export default function Blogs({
  showBlogs,
}: {
  showBlogs: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <div
        onClick={() => {
          showBlogs(false);
        }}
        title="Return home"
        style={{
          float: "left",
          marginRight: "50px",
          cursor: "pointer",
        }}
      >
        <img src="/back-arrow-icon.svg" alt="Back arrow icon" />
      </div>
      <h1 id="blogs_header">Blogs</h1>
      <hr style={{ marginBottom: "50px" }}></hr>
      <BlogPreviewDiv
        img="/imgs/python-hangman.png"
        title="How to Build a Basic Game of Hangman with Python"
        href="/blog/python-hangman"
      />
    </>
  );
}

import BlogPreviewDiv from "@/components/BlogPreviewDiv";
import Breadcrumb from "@/components/Breadcrumb";
import Head from "next/head";

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Here are some blogs that might help you and gives ideas for future personal projects"
        />
        <link rel="canonical" href="https://awoldt.com/blog" />
      </Head>
      <div className="container pt-5">
        <Breadcrumb blogTitle={null} page="blogs" />
        <hr></hr>
        <BlogPreviewDiv
          img="/imgs/python-hangman.png"
          title="Build a Basic Hangman Game with Python"
          href={"/blog/python-hangman"}
        />
      </div>
    </>
  );
}

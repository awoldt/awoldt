import BlogShowcase from "@/components/BlogShowcase";
import Nav from "@/components/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Read blogs that help you be a better developer",
  alternates: { canonical: "https://awoldt.com/blogs" },
};

export default function Page() {
  return (
    <>
      <div className="container-fluid">
        <Nav page="blogs" />
        <div className="container pt-5">
          <h1
            style={{
              fontFamily: "Silkscreen-Regular",
              fontSize: "50px",
              marginBottom: "50px",
            }}
          >
            Blogs (1)
          </h1>
          <div
            style={{
              backgroundColor: "#012745",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <BlogShowcase
              title="Using Spotify API with JavaScript"
              link="/blogs/spotify-api-with-javascript"
              description="Learn how to interact with Spotify's API and request user data"
              imgUrl="/imgs/blog/spotify-client-id.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

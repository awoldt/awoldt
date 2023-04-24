import { other_blogs } from "@/types";

export default function OtherBlogs({ blogs }: { blogs: other_blogs[] }) {
  return (
    <div className="mb-5">
      <span className="other-blogs-span">Other Blogs</span>
      {blogs.map((x: other_blogs, index: number) => {
        return (
          <div key={index}>
            <a href={x.link}>{x.title}</a>
          </div>
        );
      })}
    </div>
  );
}

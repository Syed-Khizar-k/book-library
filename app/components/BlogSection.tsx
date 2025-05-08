import React from "react";
import BlogCard from "./blogSectionComp/BlogCard";

interface BlogItem {
  image: string;
  heading: string;
  text: string;
}

const BlogSection = () => {
  const blogData: BlogItem[] = [
    {
      image: "/blog1.jpg",
      heading: "Learn about this week's top author",
      text: "Jump start your book reading by quickly checking through the popular book categories...",
    },
    {
      image: "/blog2.jpg",
      heading: "Why we celebrate readers ",
      text: "Jump start your book reading by quickly check through the popular book categories...",
    },
    {
      image: "/blog1.jpg",
      heading: "Get started on your game",
      text: "Jump start your book reading by quickly check through the popular book categories...",
    },
    {
      image: "/blog2.jpg",
      heading: "Learn about this week's top author",
      text: "Jump start your book reading by quickly checking through the popular book categories...",
    },
  ];

  return (
    <>
      <section className=" w-full container m-auto py-14 ">
        <h1 className="text-center font-bold text-3xl text-[#444444]">
          Read our many blogs
        </h1>
        <div className="w-full flex justify-center items-center py-14">
          <div className="container flex justify-center gap-10 flex-wrap ">
            {blogData.map((item, index) => (
              <BlogCard
                image={item.image}
                heading={item.heading}
                text={item.text}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;

import BlogHero from "@/components/views/Blog/BlogHero"; // If needed
import Body from "@/components/views/Blog/Body"; // Render Body with blog content
import React from "react";

const Blog = () => {
  return (
    <main>
      <BlogHero />
      <Body /> {/* Body component will display blog posts */}
    </main>
  );
};

export default Blog;
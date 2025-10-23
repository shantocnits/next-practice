import React from "react";
import Link from "next/link";

export default function Blog() {
  const blog = [
    {
      id: 1,
      title: "Blog 1",
      desc: "Blog 1 description",
    },
    {
      id: 2,
      title: "Blog 2",
      desc: "Blog 2 description",
    },
  ];

  return (
    <div className="text-amber-500 text-center text-6">
      <h1 className="text-green-800 text-6xl text-center">This is Blog Page</h1>

      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

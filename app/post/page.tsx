import React from "react";
import Link from "next/link";
import getAllPosts from "@/lib/getAllPosts";

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="text-center py-10">
      <h1 className="text-green-800 text-5xl font-bold mb-8">All Posts</h1>

      <ul className="space-y-4 max-w-3xl mx-auto">
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>
            <Link
              href={`/post/${post.id}`}
              className="text-amber-600 text-xl hover:text-green-700 transition"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

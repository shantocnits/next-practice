import React from "react";
import getPost from "@/lib/getPost";

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPost(Number(id));

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl text-green-600 mb-4">{post.title}</h2>
      <p className="text-[16px] text-gray-700 max-w-2xl mx-auto">{post.body}</p>
    </div>
  );
}

import React from "react";
import getPost from "@/lib/getPost";
import { Suspense } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPost(Number(resolvedParams.id));

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl text-green-600 mb-4">{post.title}</h2>
      <p className="text-[16px] text-gray-700 max-w-2xl mx-auto">{post.body}</p>
    </div>
  );
}


import React from "react";

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl text-green-600">
        The Blog id is: <span className="font-bold">{id}</span>
      </h2>
    </div>
  );
}

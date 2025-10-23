import React from "react";
import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        <ul className=" flex gap-4 items-center m-auto justify-content-center bg-red-100 p-4">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vission">Vission</Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
}

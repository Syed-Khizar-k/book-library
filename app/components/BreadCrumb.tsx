"use client"; // Required for using usePathname in app directory

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
  const pathname = usePathname(); // e.g., "/products/tshirts"
  const segments = pathname.split("/").filter(Boolean); // ['products', 'tshirts']

  const crumbs = segments.map((seg, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = seg
      .replace(/-/g, " ") // Replace dashes with space
      .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize words
    return { label, href };
  });

  return (
    <nav className="text-sm text-gray-600 px-4 py-5 w-full flex items-center justify-center bg-gradient-to-r from-[#FFE5E5] to-[#F5FFFE]">
      <div className="container px-[42px] flex justify-center">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="text-blue hover:underline text-[20px]">
              Home
            </Link>
          </li>
          {crumbs.map((crumb, index) => (
            <li key={index} className="flex items-center text-[20px]">
              <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />
              {index === crumbs.length - 1 ? (
                <span className="text-gray-500">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="text-blue hover:underline">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;

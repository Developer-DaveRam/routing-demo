"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <h1>
      Page Not Found For Review {reviewId} And ProductId {productId}
    </h1>
  );
}

import { notFound } from "next/navigation";

export default function Reviews({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = params;
  const parsedReviewId = Number(reviewId);

  if (!Number.isInteger(parsedReviewId) || parsedReviewId > 1000) {
    notFound();
  }

  return <h1>Product {productId} Review {reviewId}</h1>;
}

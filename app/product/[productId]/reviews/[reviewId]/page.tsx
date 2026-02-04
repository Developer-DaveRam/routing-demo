import { notFound } from "next/navigation"
export default async function Reviews({params}:{params:Promise<{productId:string,reviewId:string}>}){

    const {productId,reviewId} = await params
    if(Number(reviewId) > 1000) {
        
            notFound()
        
    }
    return <h1>Product {productId} Review {reviewId}</h1>
}
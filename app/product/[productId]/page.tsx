export default async function ProductDetails({params}:{params:Promise<{productId:string}>}){
    const productId = (await params).productId
    return <h2>Product Details {productId}</h2>
}
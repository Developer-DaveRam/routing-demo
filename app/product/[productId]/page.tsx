    import { Metadata } from "next"

    type props = {
        params:Promise<{productId:string}>
    }

    export const generateMetadata = async({params,}:props):Promise<Metadata>=>{
        const id  = (await params).productId
        return{
            title:`ProductId ${id}`
        }
    }
export default async function ProductDetails({params}:{params:Promise<{productId:string}>}){
    const productId = (await params).productId
    return <h2>Product Details {productId}</h2>
}
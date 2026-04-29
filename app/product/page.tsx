import Link from 'next/link'
export default function Product(){
    const productId = 1000
    return( <>
    <Link href="/">Home</Link>
    <h1> <Link href="/product/1"> Product 1</Link></h1>
     <h1><Link href="/product/2"> Product 2</Link></h1>
     <h1><Link href="/product/3"> Product 3</Link></h1>
     <h1><Link href="/product/4"> Product 4</Link></h1>
     <h1><Link href="/product/5" replace> Product 5</Link></h1>
     <h1><Link href={`/product/${productId}`}> Product {productId}</Link></h1>
    </>

)}
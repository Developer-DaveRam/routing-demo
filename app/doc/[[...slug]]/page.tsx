export default async function Doc({ params }: 
{ params: Promise<{ slug?: string[] }> }) {

    const {slug} = await params

    if (slug?.length === 1) {
        return <h1>the slug content {slug[0]}</h1>
    }
    else if (slug?.length === 2) {
        return <h2>The sluge 1 {slug[0]} the slug 2 {slug[1]}</h2>
    }

    return <h1>No slug is given for catch-all segments</h1>

}



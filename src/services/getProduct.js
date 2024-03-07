
export default async function getProduct(id) {
		let url = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;

    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch product # ${id}`)
    }
    return response.json()
}

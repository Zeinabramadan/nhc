
export default async function getProduct(id) {
		let url = `https://dummyjson.com/products/${id}`;

    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch product # ${id}`)
    }
    return response.json()
}

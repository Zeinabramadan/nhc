
export default function getProductsItems(searchQuery, dispatch) {
		let url = 'https://dummyjson.com/products';

		if (searchQuery) {
			url += `/search?q=${searchQuery}`;
		}
    fetch(url)
    .then(res => {
      if (res.status === 200) {
        res.json().then((response) => {
          dispatch({
            type: 'RECEIVE_PRODUCTS_ITEMS',
            products: response.products,
          })
        })
      }
    }).catch( (error) => {
      dispatch({
        type: 'SET_ERROR',
        error: error,
      })
    });
}

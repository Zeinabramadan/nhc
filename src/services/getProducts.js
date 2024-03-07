import * as ActionTypes from '../context/actionTypes.products'

export default function getProductsItems(searchQuery, dispatch) {
		let url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

		if (searchQuery) {
			url += `/search?q=${searchQuery}`;
		}
    fetch(url)
    .then(res => {
      if (res.status === 200) {
        res.json().then((response) => {
          dispatch({
            type: ActionTypes.RECEIVE_PRODUCTS_ITEMS,
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

'use client'
import React from 'react'

const productsContext = React.createContext()
const { Provider } = productsContext

const initState = {
	products: [],
	loading: false,
	searchQuery: '',
}

function useProducts() {
	const context = React.useContext(productsContext)

	if (!context) {
		throw new Error('"useProducts" must be used within ProductsProvider')
	}

	return context
}

function reducer(state, action) {
	switch (action.type) {
		case 'RECEIVE_PRODUCTS_ITEMS':
			return {
				...state,
				products: action.products,
			}

    case 'SET_SEARCH_QUERY': {
      return {
        ...state,
        searchQuery: action.query,
      }
    }

		default:
			throw new Error(`Unexpected action type ${action.type}`)
	}
}

function ProductsProvider({ children }) {
	const value = React.useReducer(reducer, initState)

	return <Provider value={value}>{children}</Provider>
}

export { useProducts, ProductsProvider }

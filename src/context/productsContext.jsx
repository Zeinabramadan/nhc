'use client'
import React from 'react'

const productsContext = React.createContext()
const { Provider } = productsContext

const initState = {
	items: [],
	loading: false,
	searchQuery: 'test',
}

function useProducts() {
	const context = React.useContext(productsContext)

	if (!context) {
		throw new Error('"useProducts" must be used within ProductsProvider')
	}

	return context
}

// eslint-disable-next-line complexity
function reducer(state, action) {
	switch (action.type) {
		case 'RECEIVE_PRODUCTS_ITEMS':
			return {
				...state,
				items: action.items,
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

ProductsProvider.defaultProps = { children: <div /> }


export { useProducts, ProductsProvider }

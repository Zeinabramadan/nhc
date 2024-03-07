'use client'

import React from 'react'

import styles from './search.module.css'
import { useProducts } from '../../context/productsContext'
import getProductsItems from '@/services/getProducts';
import * as ActionTypes from '../../context/actionTypes.products'

export default function Search() {
  const [{searchQuery, products}, dispatch] = useProducts();

   const handleChange = (e) => {
    const { value } = e.target;
    dispatch({
      type: ActionTypes.SET_SEARCH_QUERY,
      query: value,
    })
    getProductsItems(value, dispatch)
   }

  return (
    <div className={styles.search}>
      <span className={styles.search_title}>Search products by keyword</span>
      <input
        type="text"
        placeholder='Search keyword'
        className='input'
        value={searchQuery}
        onChange={handleChange}
      />
      {searchQuery && products.length >= 0 && (
        <div className={styles.search_result}>
          Total results count: <span className='active'>{products.length}</span>
        </div>
      )}
    </div>
  )
}

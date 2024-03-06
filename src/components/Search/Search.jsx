'use client'

import React, { useState } from 'react'

import styles from './search.module.css'
import { useProducts } from '../../context/productsContext'

export default function Search() {
  const [{searchQuery}, dispatch] = useProducts();

   const handleChange = (e) => {
    e.preventDefault()
    dispatch({
      type: 'SET_SEARCH_QUERY',
      query: e.target.value,
    })
    
    fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
      .then(res => {
        if (res.status === 200) {
          res.json().then((response) => {
            dispatch({
              type: 'RECEIVE_PRODUCTS_ITEMS',
              items: response.products,
            })
          })
        }
      }).catch( (error) => {
        serError('Something went wrong!');
      });
   }

  return (
    <div className={styles.search}>
      <span className={styles.search_title}>Search products by keyword</span>
      <form>
        <input
          type="text"
          placeholder='search keyword'
          className='input'
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

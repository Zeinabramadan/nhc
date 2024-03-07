'use client'

import React, { Fragment } from 'react'

import ProductItem from '../components/ProductItem/ProductItem';

import styles from './products.module.css'

import { useProducts } from '../context/productsContext'
import Notfound from '@/components/NotFound/Notfound';

export default function Products() {
  const [{products, searchQuery}] = useProducts();

  if (searchQuery && products.length == 0) {
    return (<Notfound/>)
  }

  return (
    <Fragment>
      <div className={styles.products}>
        {searchQuery && products && products.map(item => (
          <ProductItem item={item} />
        ))}
      </div>
    </Fragment>
  )
}

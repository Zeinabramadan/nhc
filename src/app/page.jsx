'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Search from '@/components/Search/Search'
import { Fragment, useState } from 'react'
import ProductItem from '@/components/ProductItem/ProductItem';

import { useProducts } from '../context/productsContext'

export default function Home() {
  const [{items}] = useProducts();

  console.log(items);
  return (
    <Fragment>
      <Search getSearchResults={(results) => setProducts(results)} />
      <span>Total results count: {items.length}</span>
      {items && items.length == 0 && <span></span>}
      {items && items.length > 0  && items.map(item => (
        <ProductItem />
      ))}
    </Fragment> 
  )
}

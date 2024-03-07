'use client'
import React from 'react'
import Image from 'next/image';
import StarRating from 'react-star-rating-component';

import getProduct from '../../../service/getProduct';
import styles from './page.module.css'

export default async function Page({ params }) {
  const { id } = params;
  const product = await getProduct(id);

  return (
    <div className={styles.product}>
      <div className={styles.product_header}>
        <h1>{product.title}</h1>
        <Image src={product.images[0]} width={200} height={200} alt={product.description} />
        <div className={styles.productDetails}>
          <div className={styles.product_metadata}>
            <div>Price: <span>{product.price}$</span></div>
            <div className={styles.rating}>Rating:
              <span>
                <StarRating
                  name='product rating'
                  value={product.rating} 
                  starColor={'#E5C72B'}
                  emptyStarColor={'#A6A6A8'}
                />
              </span>
            </div>
            <div>Brand: <span>{product.brand}</span></div>
          </div>
          <div className={styles.product_metadata}>
            <div>Discount Percentage: <span>{product.discountPercentage}</span></div>
            <div>Stock: <span>{product.stock}</span></div>
            <div>Category: <span>{product.category}</span></div>
          </div>
        </div>
      </div>
      <div className={styles.productDescription}>
        <h2>Product description</h2>
        <p>{product.description}</p>
      </div>
      <div className={styles.productImages}>
        <h2>Product Images</h2>
        <div>
          {product.images.map(img => (
            <Image src={img} key={img} width={200} height={120} />
          ))}
        </div>
      </div>
    </div>
  )
}

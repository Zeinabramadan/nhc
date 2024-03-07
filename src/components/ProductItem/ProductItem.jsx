import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './productItem.module.css'

export default function ProductItem({item}) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.card_img}
        src={item.thumbnail}
        alt={item.description}
        width='100'
        height='200'
      />
      <div className={styles.card_content}>
        <h2 className={styles.card_title}>
          <Link href={`products/${item.id}`}>{item.title}</Link>
        </h2>
        <p className={styles.card_description}>{item.description}</p>
        <div className={styles.card_actions}>
          <span>Price: <span className={styles.card_price}>{item.price}$</span></span>
          <Link href={`products/${item.id}`} className='button'>More</Link>
        </div>
      </div>
    </div>
  )
}

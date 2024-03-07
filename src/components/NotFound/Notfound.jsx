import React from 'react'
import Image from 'next/image'

import notFoundImg from '../../../public/images/Frame.svg'

import styles from './notfound.module.css'

export default function Notfound() {
  return (
    <div className={styles.notFound}>
      <Image
        src={notFoundImg}
        alt="no results"
      />
      <span className={styles.notFound_text}>
        No results for your search!
        Try another keyword
      </span>
    </div>
  )
}

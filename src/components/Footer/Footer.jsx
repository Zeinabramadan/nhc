import React from 'react'
import Image from 'next/image'

import nhcLogo from '../../../public/images/NHC.svg'
import nhcVisionImg from '../../../public/images/Vision2030White.svg'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.right_footer}>
          <Image
            src={nhcLogo}
            alt="NHC Logo"
            className={styles.footer_logo}
          />
          <Image
            src={nhcVisionImg}
            alt="NHC Logo"
            className={styles.footer_logo}
          />
        </div>
        <div className={styles.left_footer}>
          All rights reserved © 2022 - Developed and operated by National Housing
        </div>
      </div>
    </footer>
  )
}

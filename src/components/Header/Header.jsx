import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import headerLogo from '../../../public/images/logo.svg'
import styles from './header.module.css'

export default function Navbar() {

  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image
          src={headerLogo}
          alt="NHC Logo"
          className={styles.header_logo}
        />
      </Link>
      <nav className={styles.navbar}>
        <ul className={styles.navbar_list}>
          <li className={styles.navbar_list__item}>
            <Link href='/'>Products</Link>
          </li>
          <li className={styles.navbar_list__item}>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

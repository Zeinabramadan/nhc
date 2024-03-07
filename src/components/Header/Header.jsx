'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import headerLogo from '../../../public/images/logo.svg'
import styles from './header.module.css'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathName = usePathname()
  
  const navLinks = [
    {name: 'Products', href: '/products'},
    {name: 'About', href: '/about'}
  ]
  return (
    <header className={styles.header}>
      <Link href='/products'>
        <Image
          src={headerLogo}
          alt="NHC Logo"
          className={styles.header_logo}
        />
      </Link>
      <nav className={styles.navbar}>
        <ul className={styles.navbar_list}>
          {navLinks.map(link => {
            const isCurrentLink = pathName.startsWith(link.href)
            return (
              <li className={styles.navbar_list__item} key={link.name}>
                <Link
                  className={isCurrentLink ? styles.active : ''}
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

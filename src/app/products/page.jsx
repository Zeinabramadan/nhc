import Search from '@/components/Search/Search'
import { Fragment } from 'react'
import Products from '@/container/Products'

export default function Home() {

  return (
    <Fragment>
      <Search />
      <Products />
    </Fragment>
  )
}

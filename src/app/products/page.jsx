import Search from '@/components/Search/Search'
import { Fragment } from 'react'

import Products from '../../containers/Products'

export default function ProductsHome() {

  return (
    <Fragment>
      <Search />
      <Products />
    </Fragment>
  )
}

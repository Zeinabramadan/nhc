import React from 'react'

import getProduct from '../../../service/getProduct';

export default async function Page({ params }) {
  const {id} = params;
  const product = await getProduct(id);

  return (
    <div>{product.title}</div>
  )
}
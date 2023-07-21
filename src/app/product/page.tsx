'use client'

import Single from "../../components/single"

import { singleProduct } from "../../data"

import { ProductContainer } from './style'

const Product = () => {

  //Fetch data and send to Single Component
  return (
    <ProductContainer>
       <Single {...singleProduct}/>
    </ProductContainer>
  )
}

export default Product
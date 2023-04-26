import axios from 'axios'

import { validProducts } from '../utils/index.js'

export async function getProducts(callback) {
  try {
    const { data } = await axios.get('http://localhost:3001/products')
    const products = validProducts(data)
    return callback(products)
  } catch (e) {
    console.log(`=>getProductsError`, e)
  }
}

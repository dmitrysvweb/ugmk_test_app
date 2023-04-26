import { getNumberMonth } from './date.js'

export const getValueProductsByFilter = (products, filter) => {
  return products.reduce(
    (acc, product) => acc + getValueProductByKey(product, filter),
    0,
  )
}

export const getProductsByNumberMonth = (products, month) => {
  return products.filter(({ date }) => date && getNumberMonth(date) === month)
}

export const getValueProductByKey = (product, key) => {
  switch (key) {
    case 'product1':
      return product[key]
    case 'product2':
      return product[key]
    default:
      return (
        (product['product1'] || 0) +
        (product['product2'] || 0) +
        (product['product3'] || 0)
      )
  }
}

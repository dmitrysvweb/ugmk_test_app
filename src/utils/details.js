export const validProducts = (products) => {
  return products.filter(
    ({ date, product1, product2 }) => !!date && !!product1 && !!product2,
  )
}

export const getDatasetProductsByKey = ({ products, key, name, color }) => {
  const label = { color }

  const value = products.reduce((acc, curr) => acc + (curr[key] || 0), 0)

  return {
    value,
    label,
    name,
  }
}

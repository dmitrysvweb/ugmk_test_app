import React from 'react'

export const Select = ({ value, setValue }) => {
  return (
    <div className='filterBorder'>
      <div className='filter'>
        <span>Фильтр по типу продукции</span>
        <select
          onChange={(e) => {
            setValue(e.target.value)
          }}
          value={value}
        >
          <option value='all'>Все</option>
          <option value='product1'>Продукт 1</option>
          <option value='product2'>Продукт 2</option>
        </select>
      </div>
    </div>
  )
}

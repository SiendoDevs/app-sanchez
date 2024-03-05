"use client"

import React from 'react'
import ProductList from '@/app/components/ProductList'
import Navbar from '@/app/components/Navbar'

const navigation = [
  { name: 'Productos', href: 'products' },
  { name: 'Empresa', href: '#' },
  { name: 'Exportación', href: '#' },
  { name: 'Contacto', href: '#' },
];

function Products() {
  return (
    <div>
      <Navbar navigation={navigation} />
      <ProductList />
    </div>
  )
}

export default Products

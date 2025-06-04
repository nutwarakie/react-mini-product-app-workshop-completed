import { useState } from 'react'
import './App.scss'
import ProductList from './pages/ProductList'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App

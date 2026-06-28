import React, {useState,useEffect} from 'react'
import { products } from './data/products'
import ProductCard from './components/ProductCard'
import Loader from './components/Loader'

function App() {

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  
   
  }, [])

  if(loading) return <Loader/>
  
  return (
    <div className='app'>

      <h1>Product Store</h1>

      <div className='product-container'>

        {
          products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))
        }

      </div>
      
    </div>
  )
}

export default App
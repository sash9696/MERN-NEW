import React, { useCallback, useMemo, useState } from 'react'


function ProductCard({product}){
  console.log(`ProductCard Render`)

  return <h2>{product.name}</h2>
}

// const MemoProductCard = React.memo(ProductCard, (previousValue, newValue) => previousValue.name === newValue.name )



const MemoProductCard = React.memo(ProductCard )

function App() {

    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light')

    const product = useMemo(() => {
      return {
        id:1,
        name:'Iphone',
        price: 70000
      }
    }, [])

    const onAdd = useCallback(() => {

    }, [])

  console.log(`App Render`)

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Count
      </button>

      <button onClick={() => 
        setTheme(t => 
          t === 'light' ? 'dark' : 'light'
        )
      } >
        Theme
      </button>

      <MemoProductCard
        product={product}
        onAdd = {onAdd}
      />
    </div>
  )
}

export default App
// jsx
// javascript extension
import React from "react";

console.log(React);


// product name
//price
//rating
//Image

// function  ProductCard(props) {

//   return (
//     <div>
//       <h2> {props.name} </h2>
//       <p>{props.price} </p>
//     </div>
//   )
  
// }

function  ProductCard({name, price}) {

  return (
    <div>
      <h2> {name} </h2>
      <p>{price} </p>
    </div>
  )
  
}

function App() {
  return (
    <div>
      <ProductCard
        name = 'Iphone 18'
        price="$999"
      />
      <ProductCard
      name = 'Samsung S21'
      price="$899"
    />
    <ProductCard
    name = 'Macbook Pro'
    price="$1200"
  />
</div>
  );
}


export default App;

// props
// they are used passs data from parent component
//to child compoennt and vice versa is not true
//single way binding


{/* <ProductCard
name = 'Iphone 18'
price="$999"
/> */}

// it kind of gets converted to this
// ProductCard({
//   name : 'Iphone 18'
// price:"$999"
// })

// props are immutable object that are passed from parent
//component to child component
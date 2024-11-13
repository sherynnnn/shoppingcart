import React, { useState } from 'react';


const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true }
];

function App() {
  const [showSaleOnly, setShowSaleOnly] = useState(false);

  const toggle = () => {
    setShowSaleOnly(!showSaleOnly);
  };

  const filteredItems = showSaleOnly ? items.filter(item => item.onSale): items; 

  return (

    <div className='container mt-3 '>
      <h2 className="card-title mb-3">Shopping Cart</h2>
      <button onClick={toggle} className='btn btn-primary'>
        {showSaleOnly ? "Show All Items" : "Show Sale Items Only"}
      </button>

      <div className="card-body">
      <ul className="list-group"  style={{listStyleType: "none"}}>
        {filteredItems.map(item => (
          <div className="card rounded shadow-sm">
          <li key={item.id} className='p-3 d-flex justify-content-between'>
            <span>{item.name} {item.onSale && <span className='btn btn-sm btn-danger'>On Sale!</span>} </span>
            <span>${item.price}</span> 
          </li>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;

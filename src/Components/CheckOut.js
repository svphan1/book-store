import React from 'react';

const CheckOut = ({
  cartItems, 
  getTotal, 
  removeFromCart}) => {
    
  const addToCart = (list) => {
    return list.map((book, id) => {
      return (
        <tr key={id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>${book.price}</td>
          <td><button className="remove" onClick={removeFromCart}>X</button></td>
        </tr>
      )
    })
  }
  return (
    <div className="cart2 list-group-item">
      <h2>Shopping Cart</h2>
      <table>
        <thead>
        <tr>
          <th>Products</th>
          <th>Author</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
          {addToCart(cartItems)}       
          <tr>
            <td>Total:${getTotal()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CheckOut;
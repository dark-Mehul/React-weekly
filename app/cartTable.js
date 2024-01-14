import React from 'react'

function CartTable({ items }) {
  return (
    <table className="shopping-cart">
        <thead>
            <tr>
            <th></th>
            <th>Title</th>
            <th>Price</th>
            </tr>
      </thead>
      <tbody>
        { items.map((items) =>(
            <tr key={items.id} className="cart-row">
            <td>
                <img className="product-thumb"
                    src={items.imageSrc}
                    alt={items.imagAlt}
                />
            </td>
            <td>{items.title}</td>
            <td>
                 ₹{items.price}
            </td>
            
        </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CartTable
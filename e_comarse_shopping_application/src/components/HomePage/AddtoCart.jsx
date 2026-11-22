import React from 'react'
import { useCart } from '../CartApiContext';
export default function AddtoCart() {
    const { cartitem } = useCart();
    return(
    <>
    <div className="bg-[#121212] text-gray-100 p-4 rounded-lg border border-gray-800">
      {cartitem.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-800">
          {cartitem.map((item) => (
            <li key={item.id} className="py-3 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-medium text-white">{item.name}</h4>
                <p className="text-sm text-amber-400">
                  ৳{item.price} × {item.qty}
                </p>
              </div>
              <span className="font-semibold text-white">
                ৳{item.price * item.qty}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartApiContext';
import Navbar from './navber';
export default function AddtoCart() {
  const { cartitem ,dleteaddtocartdata} = useCart();

  const totalAmount = cartitem.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.qty || 1),
    0
  );

  function deletebtn(product){
   dleteaddtocartdata(product)
  }

  return (
    <>
    <Navbar/>
    <section className="min-h-screen w-full bg-[#0b0c10] px-4 py-8 text-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col justify-between rounded-2xl border border-amber-500/15 bg-[#121212] p-6 shadow-2xl shadow-black/50 sm:p-8">
        <div>
          <div className="mb-6 flex items-center justify-between border-b border-gray-800 pb-4">
            <h2 className="text-xl font-bold tracking-tight text-white">
              Shopping Cart
            </h2>
            <Link
              to="/"
              className="rounded-lg border border-gray-800 bg-[#0b0c10] px-3 py-1.5 text-xs font-medium text-amber-300 transition hover:border-amber-400/40"
            >
              ← Continue Shopping
            </Link>
          </div>

          {cartitem.length === 0 ? (
            <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
              <p className="text-base font-medium text-gray-400">
                Your cart is empty.
              </p>
              <Link
                to="/"
                className="mt-4 rounded-xl bg-amber-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-950 transition hover:brightness-110"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-gray-800">
              {cartitem.map((item) => (
                <li
                  key={item.id}
                  className="relative flex items-center justify-between gap-4 py-4"
                >
                  <div className="flex items-center gap-4">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title || item.name}
                        className="h-14 w-14 rounded-lg bg-white object-contain p-1.5"
                      />
                    )}
                    <div>
                      <h4 className="font-medium text-white">
                        {item.title || item.name}
                      </h4>
                      <p className="mt-1 text-sm text-amber-400">
                        ${Number(item.price).toFixed(2)} × {item.qty}
                      </p>
                    </div>
                  </div>
                    <div className='flex flex-col gap-3'>
                      <button type='button'
                      onClick={()=> deletebtn(item)}
                        className='text-right'> <span className='text-xs text-zinc-500 hover:text-red-400'>❌</span></button>
                  <span className="text-base font-semibold text-emerald-400">
                    ${(Number(item.price) * Number(item.qty)).toFixed(2)}
                  </span>
                  </div>
                </li>
              ))}
              {/* <div>shopnil</div> */}
            </ul>
          )}
        </div>

        {cartitem.length > 0 && (
          <div className="mt-6 flex items-center justify-between border-t border-gray-800 pt-5">
            <span className="text-sm font-medium text-gray-400">
              Total ({cartitem.length} {cartitem.length === 1 ? 'item' : 'items'})
            </span>
            <span className="text-2xl font-bold text-amber-400">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </section>
    </>
  );
}
import React, { use } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { fetchProducts } from '../../store/ProductListSlice';
import { useEffect,useState } from 'react';
import { useCart } from '../CartApiContext';
import ShowAddtoCartSucessMsg from '../HomePage/ShowAddtoCartSucessMsg.jsx'
import Navbar from '../HomePage/navber.jsx';

export default function ProductsDetals() {
   const dispatch = useDispatch();
  const {id} = useParams()
  const numericId = Number(id)
  const [qty,setQty] = useState(1)
    const { productlist,loading}= useSelector((state) => state.PruductLists)
    const productfind = productlist.find((item) => item.id === numericId)
     const {addcartitem,showmsg} = useCart()

      useEffect(() => {
        if(!productlist.length){
        dispatch(fetchProducts());}
      }, [dispatch,productlist]);

function addtocartbtn(event){
  event.preventDefault();
 addcartitem(productfind,qty)
}


//  WHEN DATA FETCHING SHOW THIS 
      if (loading) {
  return (
    <div className="min-h-screen bg-[#0b0c10] py-20 text-center text-sm text-zinc-400">
      Loading product details...
    </div>
  );
}


// WHEN DATA NOT FOUND SHOW THIS 
if (!productfind){
  return (
    <div className="min-h-screen bg-[#0b0c10] py-20 text-center text-sm text-zinc-400">
      <p className="mb-4">Product not found.</p>
      <Link to="/" className="text-amber-400 underline">
        Back to Products
      </Link>
    </div>
  );
}
  return (
    <>
     
   <Navbar/>
 
    <section className="min-h-screen bg-[#0b0c10] px-4 py-10 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Top Back Link */}
        <div className="mb-6 flex justify-between h-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#121212] px-3.5 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-amber-400/40 hover:text-amber-300"
          >
            <span>←</span>
            <span>Back to Products</span>
          </Link>
           {showmsg.success && <ShowAddtoCartSucessMsg/>}
        </div>

        {/* Main Details Card */}
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-amber-500/15 bg-[#121212] shadow-2xl shadow-black/50 lg:grid-cols-2">
          {/* Image Showcase */}
          <div className="relative flex min-h-[340px] items-center justify-center bg-gradient-to-b from-white via-zinc-50 to-zinc-100 p-10 lg:min-h-[460px]">
            <span className="absolute top-4 left-4 rounded-full border border-amber-400/30 bg-[#0b0c10]/90 px-3.5 py-1 text-[11px] font-medium tracking-wider text-amber-300 capitalize backdrop-blur-md">
              {productfind.category}
            </span>

            <img
              src={productfind.image}
              alt={productfind.title}
              className="max-h-80 max-w-full object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              {/* Rating & Stock */}
              <div className="mb-4 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 font-semibold text-amber-300">
                  <span>★</span>
                  <span>{productfind.rating.rate}</span>
                  <span className="font-normal text-zinc-400">
                    ({productfind.rating.count} reviews)
                  </span>
                </span>

                <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                  In Stock
                </span>
              </div>

              {/* Title */}
              <h1 className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
                {productfind.title}
              </h1>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3 border-b border-zinc-800/90 pb-5">
                <span className="text-3xl font-bold tracking-tight text-emerald-400">
                  ${productfind.price.toFixed(2)}
                </span>
                <span className="text-xs text-zinc-500">
                  Inclusive of all taxes
                </span>
              </div>

              {/* Description */}
              <div className="mt-5">
                <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                  Description
                </h2>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {productfind.description}
                </p>
              </div>
            </div>

            {/* Footer Actions Layout */}
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-zinc-800/90 pt-6">
              <div className="flex items-center rounded-xl border border-zinc-800 bg-[#0b0c10] p-1">
                <button
                  type="button"
                  onClick={()=> setQty((pev) =>( pev > 1 ? pev - 1 :1))}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-zinc-300 hover:bg-zinc-800 hover:text-amber-300"
                >
                  −
                </button>
                <span className="w-10 text-center text-sm font-semibold text-white">
                  {qty}
                </span>
                <button
                  onClick={() =>setQty((pev) =>(pev + 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-zinc-300 hover:bg-zinc-800 hover:text-amber-300"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                disabled= {showmsg.loading}
                onClick={addtocartbtn}
                className="flex-1 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow-lg shadow-amber-500/15 transition-all duration-200 hover:brightness-110"
              >
                <span>{showmsg.loading ? 'loading...' :'add to cart'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

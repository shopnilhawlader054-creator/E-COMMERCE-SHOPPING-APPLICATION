import React, { useMemo, useState,useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchcategorys } from '../../store/CtegorySlice';

const ProductFilter = ({datafilter,filter}) => {


  function filterbtn(e){
    const {name,value} = e.target
    datafilter(name,value)
   
  }
  const despatch = useDispatch();
  const { Categorys, loading, error } = useSelector((state) => state.Categorys);

  useEffect(() => {
    despatch(fetchcategorys());
  }, [despatch]);

  return (
    <section className="w-full border-y border-amber-500/15 bg-[#121212] px-4 py-2 text-xs text-zinc-100 shadow-md shadow-black/30">
      <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-center gap-2.5">
        {/* Search Input */}
        <div className="w-full sm:w-64">
          <label className="sr-only">Search by Name</label>
          <input
             name="search"
            type="text"
            value={filter.search}
            
            onChange={(e) => filterbtn(e)}
            placeholder="Search products..."
            className="w-full rounded-md border border-zinc-800 bg-[#0b0c10] px-2.5 py-1.5 text-xs text-white placeholder-zinc-500 transition-colors focus:border-amber-400/70 focus:outline-none"
          />
        </div>

        {/* Category Select */}
        <div className="w-full sm:w-44">
          <label className="sr-only">Category</label>
          <select
            // value={categorys.category}
            name="category"
            onChange={(e) =>  filterbtn(e)}
            className="w-full cursor-pointer rounded-md border border-zinc-800 bg-[#0b0c10] px-2.5 py-1.5 text-xs capitalize text-white transition-colors focus:border-amber-400/70 focus:outline-none"
          >
            <option value="all" className="bg-[#121212] text-xs capitalize text-white">
                  All Categories
                </option>
            {Categorys.map((cat) => (
              <option key={cat} value={cat}className="bg-[#121212] text-xs capitalize text-white">
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Price Sort Select */}
        <div className="w-full sm:w-44">
          <label className="sr-only">Price Sort</label>
          <select
            // value={sortPrice}
            onChange={(e) => filterbtn(e)}
            name="price"
            className="w-full cursor-pointer rounded-md border border-zinc-800 bg-[#0b0c10] px-2.5 py-1.5 text-xs text-white transition-colors focus:border-amber-400/70 focus:outline-none"
          >
            <option value="default" className="bg-[#121212] text-xs text-white">Sort: Default</option>
            <option value="low-to-high" className="bg-[#121212] text-xs text-white">Price: Low to High</option>
            <option value="high-to-low" className="bg-[#121212] text-xs text-white">Price: High to Low</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;
import React from 'react'


export default function ProductCard({productlist,loading,error}) {


  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productlist.map((product) => (
        <article
          key={product.id}
          className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-500/15 bg-[#121212] text-zinc-100 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/50 hover:shadow-amber-950/30"
        >
          {/* Image Showcase */}
          <div className="relative flex h-64 w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-zinc-100 p-7">
            <span className="absolute top-3.5 left-3.5 rounded-full border border-amber-400/30 bg-[#0b0c10]/90 px-3 py-1 text-[11px] font-medium tracking-wider text-amber-300 capitalize backdrop-blur-md">
              {product.category}
            </span>

            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-1 flex-col justify-between p-5">
            <div>
              {/* Rating & Review Pill */}
              <div className="mb-3 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-1 font-semibold text-amber-300">
                  <span>★</span>
                  <span>{product.rating.rate}</span>
                </span>
                <span className="text-zinc-400">
                  {product.rating.count} reviews
                </span>
              </div>

              {/* Title */}
              <h2
                title={product.title}
                className="line-clamp-2 text-[15px] font-semibold leading-snug tracking-tight text-white transition-colors duration-200 group-hover:text-amber-300"
              >
                {product.title}
              </h2>

              {/* Description */}
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-zinc-400">
                {product.description}
              </p>
            </div>

            {/* Price & CTA Footer */}
            <div className="mt-5 flex items-center justify-between border-t border-zinc-800/90 pt-4">
              <div>
                <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                  Price
                </span>
                <span className="text-xl font-bold tracking-tight text-emerald-400">
                  ${Number(product.price).toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                onClick={() => onAddToCart?.(product)}
                className="cursor-pointer rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-4 py-2.5 text-xs font-semibold tracking-wide text-zinc-950 shadow-md shadow-amber-500/15 transition-all duration-200 hover:brightness-110 active:scale-95"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
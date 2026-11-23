import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../CartApiContext'

export default function ShowAddtoCartSucessMsg() {
    const { removesuccesmsg } = useCart()
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const frame = requestAnimationFrame(() => setVisible(true))
        return () => cancelAnimationFrame(frame)
    }, [])

    return (
        <>
            <div
                role="status"
                aria-live="polite"
                className={`flex z-60 items-center gap-4 rounded-2xl border border-emerald-500/30 bg-[#121212]/95 px-4 py-3 text-sm text-zinc-100 shadow-2xl shadow-black/60 backdrop-blur-md transition-all duration-300 ease-out ${
                    visible ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                }`}
            >
                <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 font-bold text-emerald-400">
                        ✓
                    </span>
                    <div>
                        <p className="font-semibold text-white"></p>
                        <Link
                            to="/cart"
                            onClick={() => removesuccesmsg()}
                            className="text-xs font-medium text-amber-400 hover:underline"
                        >
                            View Cart →
                        </Link>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => removesuccesmsg()}
                    aria-label="Close notification"
                    className="rounded-lg p-1 text-xs text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                >
                    ✕
                </button>
            </div>
        </>
    )
}
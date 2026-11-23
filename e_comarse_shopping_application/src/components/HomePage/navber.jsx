import { Link } from "react-router-dom";
import { useCart } from "../CartApiContext";

export default function Navbar() {
  const { cartitem } = useCart();
  const totalItems = cartitem.length

  return (
    <nav className="bg-[#0b0c10] text-gray-100 border-b border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wide text-[#d4af37]">
          ShopStore
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-[#d4af37] transition-colors">
            Home
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 hover:text-[#d4af37] transition-colors"
          >
            <span>Cart</span>
            <span className="bg-[#d4af37] text-[#0b0c10] text-xs font-bold px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
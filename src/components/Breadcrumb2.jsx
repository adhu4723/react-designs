import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Breadcrumb2({product}) {
  return (
    <div className="flex items-center space-x-2 text-sm bg-[#FAF6EF] p-4">
      <nav className="flex items-center text-gray-400 space-x-2">
        <Link to={'/'} className="hover:text-black cursor-pointer">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to={'/shop'} className="hover:text-black cursor-pointer">Shop</Link>
        <ChevronRight className="w-4 h-4" />
      </nav>
      <div className="border-l border-gray-300 h-4 mx-2" />
      <span className="text-black font-medium">{product?product:""}</span>
    </div>
  );
}

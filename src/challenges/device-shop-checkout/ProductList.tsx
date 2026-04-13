import { X } from "lucide-react";
import Image from "next/image";

const PRODUCTS = [
  { id: 1, name: "iPhone 12 Pro", color: "Golden", price: 999, qty: 1, img: "Gold.png" },
  { id: 2, name: "Apple Watch", color: "Blue", price: 399, qty: 1, img: "Apple-watch.png" },
  { id: 3, name: "iMac", color: "Green", price: 1199, qty: 1, img: "iMac.png" },
];

export default function ProductList() {
  return (
    <div className="space-y-6 mb-10">
      {PRODUCTS.map((product) => (
        <div key={product.id} className="flex items-center gap-4 group">
          <div className="w-24 h-24 bg-white border border-gray-100 rounded-2xl flex items-center justify-center p-2 shadow-sm">
            <img src={`/challenges/device-shop-checkout/${product.img}`} alt={product.name} className="max-h-full object-contain" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
                <p className="text-gray-400 text-sm">{product.color}</p>
              </div>
              <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-400 text-sm font-medium">x {product.qty}</span>
              <button className="text-gray-300 hover:text-red-500 transition-colors">
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
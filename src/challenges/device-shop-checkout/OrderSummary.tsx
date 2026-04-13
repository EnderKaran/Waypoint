export default function OrderSummary() {
  return (
    <div className="space-y-6 pt-10 border-t border-gray-200">
      {/* Coupon Area */}
      <div className="flex gap-3">
        <input 
          type="text" 
          placeholder="Enter coupon code" 
          className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-[#111827] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-black transition-all">
          Apply Coupon
        </button>
      </div>

      {/* Totals */}
      <div className="space-y-2">
        <div className="flex justify-between text-gray-500 text-sm font-medium">
          <span>Sub total</span>
          <span className="text-gray-900">$2597.00</span>
        </div>
        <div className="flex justify-between text-gray-500 text-sm font-medium">
          <span>Tax</span>
          <span className="text-gray-900">$623.28</span>
        </div>
        <div className="flex justify-between text-xl font-bold pt-2 border-t border-gray-100">
          <span className="text-gray-900">Total</span>
          <span className="text-gray-900">$3220.28</span>
        </div>
      </div>
    </div>
  );
}
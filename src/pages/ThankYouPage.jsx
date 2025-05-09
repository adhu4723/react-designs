import React from "react";
import { useCart } from "../context/CartContext";
import DeliveryProgress from "../components/DeliveryProgress";

const OrderConfirmedPage = () => {
  const { cartItems } = useCart();
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full  rounded-3xl items-start overflow-hidden flex flex-col lg:flex-row ">
        
       

        {/* Right Side */}
        <div className="flex-1 bg-white p-6 sm:p-8 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl text-amber-800 font-bold mb-4 text-center lg:text-left">
            ORDER CONFIRMED
          </h2>

          <p className="text-gray-700 mb-6 lg:text-left">
            Hello <span className="font-semibold">Andrew</span>,<br />
            Your order has been confirmed and will be delivered to your location address within <span className="font-semibold">5-7 days.</span> 
          </p>

          {/* Order Number */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-700 font-semibold">Order Number</span>
            <span className="text-red-500 font-bold">#45217865</span>
          </div>

          {/* Products */}
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-gray-700">
                <div className="flex items-center gap-4">
                  <img
                    src={item?.image_path || ''}
                    alt=""
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold">{item?.name || ''}</p>
                    <p className="text-sm">Quantity: <span>1</span></p>
                  </div>
                </div>
                <span className="font-semibold">${item?.price || ''}</span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex items-center justify-between border-t pt-4 mt-4 font-semibold text-gray-800">
            <span>Total Amount</span>
            <span>${totalAmount}</span>
          </div>

          {/* Track Order Button */}
          <button
            className="mt-6 bg-amber-700 hover:bg-amber-800 text-white uppercase font-semibold py-3 px-6 rounded-full transition w-full"
            onClick={() => alert('Redirecting to Email...')}
          >
            Track Order
          </button>
        </div>
 {/* Left Side */}
 <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br ">
          <DeliveryProgress />
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmedPage;

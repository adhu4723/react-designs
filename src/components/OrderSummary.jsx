import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");
   const {cartItems,removeFromCart}=useCart()
   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
   const navigate =useNavigate()

  return (
    <div className="max-w-xl mx-auto px-4 py-8 space-y-6 bg-white">
      {/* Product Summary */}
      <div className="border-b pb-6">
        <div className="flex justify-between font-semibold text-lg mb-4">
          <span>Product</span>
          <span>Subtotal</span>
        </div>
        {cartItems.map(items=>(
            <div className="flex justify-between text-gray-500">
          <span>
           {items?.name||'Asgaard sofa'}   <span className="text-black">x 1</span>
          </span>
          <span>Rs.  {items?.price||'999'} </span>
        </div>
        ))}
        

        <div className="flex justify-between mt-4">
          <span className="font-medium">Subtotal</span>
          <span>Rs.{subtotal}</span>
        </div>

        <div className="flex justify-between mt-2">
          <span className="font-semibold">Total</span>
          <span className="text-yellow-600 font-bold text-lg">Rs. {subtotal}</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className="space-y-4 border-b pb-6">
        <div className="flex items-start gap-2">
          <input
            type="radio"
            id="bank"
            name="payment"
            checked={paymentMethod === 'bank'}
            onChange={() => setPaymentMethod('bank')}
            className="mt-1"
          />
          <div>
            <label htmlFor="bank" className="font-medium cursor-pointer">
              Direct Bank Transfer
            </label>
            <p className="text-sm text-gray-500 mt-1">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference.
              Your order will not be shipped until the funds have cleared in our account.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <input
            type="radio"
            id="cod"
            name="payment"
            disabled
            className="cursor-not-allowed"
          />
          <label htmlFor="cod" className="cursor-not-allowed font-medium">
            Cash On Delivery
          </label>
        </div>
      </div>

      {/* Policy Note */}
      <p className="text-sm text-gray-700">
        Your personal data will be used to support your experience throughout this website, to manage access to your
        account, and for other purposes described in our{' '}
        <span className="font-semibold cursor-pointer">privacy policy</span>.
      </p>

      {/* Place Order Button */}
      <button
        type="submit"
        onClick={()=>navigate('/thankyou')}
        className="w-full py-3 border border-black rounded-md text-lg font-medium hover:bg-black hover:text-white transition"
      >
        Place order
      </button>
    </div>
  );
};

export default OrderSummary;

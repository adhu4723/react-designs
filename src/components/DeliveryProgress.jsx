import React from 'react';

const deliverySteps = [
  {
    status: 'Order Confirmed',
    description: 'Order placed at FaveKitchens - SODO on Mar 01, 2025 at 12:51 AM',
    color: 'bg-green-500',
  },
  {
    status: 'Order Shipped',
    description: '--',
    color: 'bg-gray-300',
  },
  {
    status: 'Out for Delivery',
    description: '--',
    color: 'bg-gray-300',
  },
  {
    status: 'Order Recieved',
    description: '--',
    color: 'bg-gray-300',
  },
];

const DeliveryProgress = () => {
  return (
    <div className=" mx-auto bg-white rounded-lg  p-6">
      <h2 className="text-xl uppercase text-amber-800 font-semibold mb-6">Delivery Progress</h2>
      <div className="relative border-l-2 border-gray-200">
        {deliverySteps.map((step, index) => (
          <div key={index} className="mb-8 ml-6 relative">
            <span className="absolute -left-9 top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-gray-200">
              <div className={`w-3 h-3 rounded-full ${step.color}`}></div>
            </span>
            <div className="flex items-center mb-2">
              <span
                className={`px-2 py-0.5 rounded text-md font-semibold text-white ${step.color}`}
              >
                {step.status}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryProgress;

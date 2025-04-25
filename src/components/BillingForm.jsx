// components/BillingForm.jsx
import InputField from './InputField';

const BillingForm = () => {
  return (
    <form className="max-w-xl  px-4 py-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Billing details</h2>

      {/* First & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField label="First Name" name="firstName" />
        <InputField label="Last Name" name="lastName" />
      </div>

      <InputField label="Company Name (Optional)" name="company" />

      {/* Country / Region */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-black">Country / Region</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-500">
          <option>Sri Lanka</option>
        </select>
      </div>

      <InputField label="Street address" name="street" />
      <InputField label="Town / City" name="city" />

      {/* Province */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-black">Province</label>
        <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-500">
          <option>Western Province</option>
        </select>
      </div>

      <InputField label="ZIP code" name="zip" />
      <InputField label="Phone" name="phone" type="tel" />
      <InputField label="Email address" name="email" type="email" />

      {/* Additional Info */}
      <textarea
        placeholder="Additional information"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
        rows={3}
      />
    </form>
  );
};

export default BillingForm;

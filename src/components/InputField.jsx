const InputField = ({ label, type = "text", name, value, onChange, placeholder }) => {
    return (
      <div className="flex flex-col space-y-1">
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm  focus:outline-none  focus:border-transparent"
        />
      </div>
    );
  };
  
  export default InputField;
  
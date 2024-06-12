type TypeProps = {
  type: string;
  placeholder: string;
};

const Input = ({ type, placeholder }: TypeProps) => {
  return (
    <input
      type={type}
      className="border border-light-gray hover:ring-2 hover:ring-medium-gray outline-none w-80 h-12 rounded-lg px-4"
      placeholder={placeholder}
    />
  );
};
export default Input;

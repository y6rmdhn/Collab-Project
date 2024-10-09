export const Button = ({ children, bgColor }) => {
  return (
    <div>
      <button
        className="px-3 py-2 text-white rounded-full mt-4 font-medium"
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </button>
    </div>
  );
};

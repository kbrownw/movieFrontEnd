export const Button = ({ text, type = "button", clickFunction }) => {
  return (
    <button
      className="bg-[#562C2C] rounded-lg h-14 w-auto px-10 text-white text-xl hover:bg-blue transition relative"
      type={type}
      onClick={clickFunction}
    >
      {text}
    </button>
  );
};

import { Calculator } from 'phosphor-react';

const Button = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full h-10 rounded-md text-white bg-[#5c95e6] hover:bg-[#5c96e6c5] flex justify-center cursor-pointer mt-8"
    >
      <button className="flex justify-center items-center gap-4 text-white ">
        <Calculator size={18} color="white" />
        Calcular IMC
      </button>
    </div>
  );
};

export default Button;

import React from 'react';
import Lottie from "lottie-react";
import animationData from "../assets/animate.json";



const Imagem = () => {
  return (
    <div className='flex justify-center w-full' style={{ width: 400 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>

  );
};

export default Imagem;
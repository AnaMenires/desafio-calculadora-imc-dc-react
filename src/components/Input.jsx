import { ArrowLineUp } from 'phosphor-react';
import { ArrowLineDown } from 'phosphor-react';
import { useState } from 'react';
import Button from './Button';


const Input = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    const calcularIMC = () => {
      if (!altura || !peso) {
        alert("Por favor, preencha altura e peso.");
        return;
      }
    
      const alturaEmMetros = parseFloat(altura.replace(',', '.'));
      const pesoKg = parseFloat(peso.replace(',', '.'));
    
      if (isNaN(alturaEmMetros) || isNaN(pesoKg)) {
        alert("Valores inválidos.");
        return;
      }
    
      const imc = pesoKg / (alturaEmMetros * alturaEmMetros);
      alert(`Seu IMC é ${imc.toFixed(2).replace('.', ',')}`);

    };
    
      
            
    return (
      <div>
        <div>
          <h2 className="text-sm text-white">Altura (cm)</h2>
        </div>
  
        <label
          className="w-full h-10 rounded-md text-white bg-[#283241] flex items-center justify-between p-4 mt-2 border border-[#555f6f] cursor-text mb-2"
          onClick={() => document.getElementById('inputAltura').focus()}
        >
          <input
         type="text"
         value={altura}
         onChange={(e) => {
           const valorDigitado = e.target.value;
           const valorLimpo = valorDigitado.replace(/[^0-9.,]/g, '');
           setAltura(valorLimpo);
         }}
         className="text-[12px] text-white bg-transparent outline-none w-full"
         placeholder="Digite sua Altura"
        />
<div className="flex flex-col ml-2">
<ArrowLineUp
  size={16}
  className="text-white h-4 cursor-pointer hover:text-blue-400"
  onClick={(e) => {
    e.stopPropagation();
    const alturaAtual = parseFloat(altura.replace(',', '.')) || 0;
    const novaAltura = (alturaAtual + 0.01).toFixed(2);
    setAltura(novaAltura.toString().replace('.', ','));
  }}
/>
<ArrowLineDown
  size={16}
  className="text-white h-4 cursor-pointer hover:text-blue-400"
  onClick={(e) => {
    e.stopPropagation();
    const alturaAtual = parseFloat(altura.replace(',', '.')) || 0;
    const novaAltura = Math.max(0, alturaAtual - 0.01).toFixed(2);
    setAltura(novaAltura.toString().replace('.', ','));
  }}
/>

</div>

         
        </label>

        <div>
  <h2 className="text-sm text-white">Peso (kg)</h2>
</div>
<label
  className="w-full h-10 rounded-md text-white bg-[#283241] flex items-center justify-between p-4 mt-2 border border-[#555f6f] 
cursor-text mb-2"
 onClick={() => document.getElementById('inputPeso').focus()}
>
  <input
     type="text"
     value={peso}
     onChange={(e) => {
       const valorDigitado = e.target.value;
       const valorLimpo = valorDigitado.replace(/[^0-9.,]/g, '');
       setPeso(valorLimpo);
     }}
    className="text-[12px] text-white bg-transparent outline-none w-full"
    placeholder="Digite seu Peso"
    

  />
   <div className="flex flex-col ml-2">
   <ArrowLineUp
  size={16}
  className="text-white h-4 cursor-pointer hover:text-blue-400"
  onClick={(e) => {
    e.stopPropagation();
    const pesoAtual = parseFloat(peso.replace(',', '.')) || 0;
    const novoPeso = pesoAtual + 1;
    setPeso(novoPeso.toString().replace('.', ','));
  }}
/>
<ArrowLineDown
  size={16}
  className="text-white h-4 cursor-pointer hover:text-blue-400"
  onClick={(e) => {
    e.stopPropagation();
    const pesoAtual = parseFloat(peso.replace(',', '.')) || 0;
    const novoPeso = Math.max(0, pesoAtual - 1);
    setPeso(novoPeso.toString().replace('.', ','));
  }}
/>
</div>
   </label>
 <Button onClick={calcularIMC} />

      </div>
    )
  }









export default Input;
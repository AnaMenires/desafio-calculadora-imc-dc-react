import Imagem from './components/Imagem.jsx'
import Input from './components/Input.jsx'
import Text from './components/Text.jsx'


function App() {
  
  return (

    <main className='w-full h-screen flex bg-[#161e2c] justify-center items-center gap-40 '>
     
    <div>
      <div className="flex flex-col items-center gap-8" >
      <Imagem />
      <Text/>
      </div>
    </div>
     
     
    <div>
      <div className='w-100 h-70 border border-[#555f6f] bg-[#2e3848] gap-5 p-4 flex flex-col justify-between '>
      
     
      <Input  />
     

      </div>
    </div>

    </main>
                                                               
  )
}

export default App;

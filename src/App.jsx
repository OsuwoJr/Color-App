import Square  from './Square'; 
import Input from './Input';
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div className='App'>
       <Square/>
       <Input/>
      </div>
      
  );
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ComboBox from './components/select'
import Box from './components/box'
import './app.css'



function App() {
  const [value, setValue] = useState('')


  return (
      <div class="container">
        <Box 
          value = {value}
        />
       <ComboBox
         value = {value}
         onChange={(meghdar) => {
           setValue(meghdar)
          }}
       />
       </div>
  )
}

export default App

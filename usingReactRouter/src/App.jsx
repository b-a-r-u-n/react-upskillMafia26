import { useState } from 'react'
import {Header, Footer,Dashboard} from './Components'

function App() {

  return (
    <div className='bg-black h-full text-white'>
      <Header />
      <Dashboard />
      <Footer />
     </div>
  )
}

export default App

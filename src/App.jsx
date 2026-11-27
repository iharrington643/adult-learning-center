import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Adult Learning Center</h1>
      
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient />
   </>
  )
}

export default App

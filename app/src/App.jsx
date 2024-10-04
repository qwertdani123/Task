import React from 'react'
import Header from './header'
import Productos from './container'
import UsarContexto from './context.js/UsarContexto'



export default function App() {

  return (
    <>
    <UsarContexto>

      <Header />
      <Productos />
      
    </UsarContexto>
      
    </>
  )
}

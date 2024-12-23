import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function Header(props) {
  return (
    <header>
      <div>
        <img src="images.jpg" alt="" />
        <h3>Introduction à React</h3>
        <h6>A la découverte des premières notions de React</h6>
      </div>
    </header>
  )
}

function MainContent() {
  return (

    <main>
      <p>Ici, nous afficherons des informations interessantes :) "</p>

    </main>
  )
}

function Footer() {
  return (
    <footer className='foot'>
      <div >Tous droits réservés - MUTAKA DANIEL</div>
    </footer>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header name='test' />
        <MainContent />
        <Footer />
      </div>
    </>
  )
}

export default App

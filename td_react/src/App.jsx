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
  const date = new Date();
  const year = date.getFullYear();
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return (

    <main>
      <p>Ici, nous afficherons des informations interessantes <br />
        Bonjour, on est le {day}, {month}, {year} et il est {hour}:{minute}:{second}"
      </p>

    </main>
  )
}

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='foot'>
      <div >
        © {year} - MUTAKA DANIEL, Tous droits réservés.
      </div>
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

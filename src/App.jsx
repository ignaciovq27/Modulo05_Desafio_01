import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

//views
import About from './views/About'
import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'

//components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </main>

      <Footer />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App

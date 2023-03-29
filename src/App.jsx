import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

//views
import Products from './views/Products'
import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'

//components
import Footer from './components/Footer'
// import Navbar from './components/Navbar'
import NewNavbar from './components/NewNavbar'
import { Button } from "@mui/material";
// import Button from "@mui/material/Button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Navbar /> */}
      <NewNavbar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </main>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Footer />

    </div>
  )
}

export default App

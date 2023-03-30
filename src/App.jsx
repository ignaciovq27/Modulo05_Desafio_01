import { Routes, Route } from "react-router-dom"

//views
import Products from './views/Products'
import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'

//components
import Footer from './components/Footer'
import NewNavbar from './components/NewNavbar'

function App() {

  return (
    <div className="app background-pattern">
      <NewNavbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

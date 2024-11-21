import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import ProductList from './components/Products/ProductList'

function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App

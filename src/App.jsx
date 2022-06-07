import { Routes, Route } from 'react-router-dom'


import './App.css'
import MainPage from './components/MainPage/MainPage'

function App() {


  return (
    <div className="container-fluid p-3 my-3">
      <div id='foto'>
        <img id='imagen' src='https://th.bing.com/th/id/OIP.Ghj8qwa1UsMNbVVEfjEreAHaHa?pid=ImgDet&rs=1' className="img-fluid" alt='' />
      </div>

      <hr />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App

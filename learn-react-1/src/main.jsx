import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
(<ClassList/>)

)

function ClassList() {
  return( 
  <div>
    <h1>Hello World!</h1>
  </div>) 
}


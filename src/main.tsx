import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FizzBuzzComponent from './FizzBuzz.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FizzBuzzComponent />
  </StrictMode>
)

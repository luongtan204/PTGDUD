import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RecipeBoxIntro from './components/RecipeBoxIntro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <RecipeBoxIntro></RecipeBoxIntro>
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RecipeBoxIntro from './components/RecipeBoxIntro'
import RecipeList from './components/RecipeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <RecipeBoxIntro></RecipeBoxIntro>
      <RecipeList></RecipeList>
    </div>
  )
}

export default App

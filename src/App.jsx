import { Navbar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer text={'Aguante Eminem'} />
    </div>
  )
}

export default App

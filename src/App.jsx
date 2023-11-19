import './App.css'
import Header from "./components/Header"
import Place from './components/Place'
import dataArray from "./data"


function App() {
const dataRender = dataArray.map(data => {
  return (
    <Place 
      key={dataArray.indexOf(data)}
      {...data}
    />
    )
  
})

  return (
    <div className='app'>
      <Header />
      {dataRender}
    </div>
  )
}

export default App

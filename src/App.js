import React from 'react'
import Barchart from './components/Barchart'
import Piechart from './components/Piechart'
import "./App.css"

function App() {
  return (
    <div className="grid_container">
          <div className="item1">
            <Piechart/>
          </div>

      <div className="item2">
    <Barchart/>
    </div>
    </div>
  )
}

export default App
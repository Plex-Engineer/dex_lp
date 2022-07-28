import Dex from 'pages/main/Dex'
import './App.scss'
import { Overlay, ScanLine, ScanlinesOverlay, StaticNoiseOverlay } from 'global/styled-components/Overlays'
import NavBar from 'global/components/navbar'

function App() {

  return (
    <div className="App">
      <StaticNoiseOverlay/>
      <ScanlinesOverlay />
      <ScanLine/>
      <Overlay/>
      <NavBar/>
      <Dex/>
    </div>
  )
}

export default App

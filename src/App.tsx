import Dex from 'pages/main/Dex'
import './App.scss'
import { Overlay, ScanLine, ScanlinesOverlay, StaticNoiseOverlay } from 'global/styled-components/Overlays'

function App() {

  return (
    <div className="App">
      <StaticNoiseOverlay/>
      <ScanlinesOverlay />
      <ScanLine/>
      <Overlay/>
      <Dex/>
    </div>
  )
}

export default App

import LendingMarket from 'pages/main/LendingMarket'
import './App.scss'
import { Overlay, ScanLine, ScanlinesOverlay, StaticNoiseOverlay } from 'global/styled-components/Overlays'

function App() {

  return (
    <div className="App">
      {/* <StaticNoiseOverlay/> */}
      {/* <ScanlinesOverlay /> */}
      <ScanLine/>
      <Overlay/>
        <LendingMarket/>
    </div>
  )
}

export default App

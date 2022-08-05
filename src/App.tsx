import Dex from 'pages/main/Dex'
import './App.scss'
import { Overlay, ScanLine, ScanlinesOverlay, StaticNoiseOverlay } from 'global/styled-components/Overlays'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { CantoNav } from 'global/components/cantoNav'
function App() {

  return (
    <div className="App">
      <ToastContainer/>
      <StaticNoiseOverlay/>
      <ScanlinesOverlay />
      <ScanLine/>
      <Overlay/>
      <CantoNav/>
      <Dex/>
    </div>
  )
}

export default App

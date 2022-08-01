import Dex from 'pages/main/Dex'
import './App.scss'
import { Overlay, ScanLine, ScanlinesOverlay, StaticNoiseOverlay } from 'global/styled-components/Overlays'
import NavBar from 'global/components/navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className="App">
      <ToastContainer/>
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

//assets
import './App.css'

import Header from './components/Header'
import ImageDisplay from './components/ImageDisplay'
import MainSection from './components/MainSection'
import ScreenScribbles from './components/ScreenScribbles'
function App() {
  return (
    <>
      {/* Posicionamientos absolutos, elementos estéticos */}
      <div className='absolute w-40 h-7 bg-black top-0 left-0'></div>
      <div className='absolute h-40 w-7 bg-black bottom-0 right-0'></div>
      <Header/>
      <ImageDisplay/>
      <ScreenScribbles/>
      <MainSection>
        
      </MainSection>
      
    </>
  )
}

export default App

//imports
import { useState } from 'react';
//assets
import './App.css';
//Components
import Header from './components/Header';
import ImageDisplay from './components/ImageDisplay';
import MainSection from './components/MainSection';
import ScreenScribbles from './components/ScreenScribbles';
import TableOfContents from './components/TableOfContents';
import Rectangles from './components/Rectangles';
import UnalLogo from './components/UnalLogo';
import Mark from './components/Mark';
function App() {
  const [Content, setContent] = useState();
  return (
    <>
      <UnalLogo/>
      <Rectangles/>
      <Header/>
      <ImageDisplay/>
      <ScreenScribbles/>
      <MainSection>
        {Content}
        <TableOfContents setContent = {setContent}/>
      </MainSection>
      <Mark/>
    </>
  );
}

export default App;
//imports
import { useState } from 'react';
//assets
import './App.css';
//Components
import ImageDisplay from './components/ImageDisplay';
import MainSection from './components/MainSection';
import ScreenScribbles from './components/ScreenScribbles';
import TableOfContents from './components/TableOfContents';
import Rectangles from './components/Rectangles';
import UnalLogo from './components/UnalLogo';

function App() {
  const [Content, setContent] = useState();
  return (
    <>
      <UnalLogo/>
      <Rectangles/>
      <ImageDisplay/>
      <ScreenScribbles/>
      <MainSection>
        {Content}
        <TableOfContents setContent = {setContent}/>
      </MainSection>
    
    </>
  );
}

export default App;

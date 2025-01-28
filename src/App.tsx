import Cursor from './components/Cursor';
import NavBar from './components/navbar/NavBar';
import Name from './components/name/Name.tsx';
import TextBlockOne from './components/text-block/TextBlockOne.tsx';
import TeckStack from './components/tech-stack/TeckStack.tsx';
import TextBlockTwo from './components/text-block/TextBlockTwo.tsx';
import Works from './components/works/Works.tsx';
import AboutMe from './components/about-me/AboutMe.tsx';
import Footer from './components/footer/Footer.tsx';

import './styles/global.sass';

function App() {
  return(
    <>
      <Cursor/>
      <NavBar/>
      <Name/>
      {/*<TextBlockOne/>*/}
      <TeckStack/>
      <TextBlockTwo/>
      <Works/>
      <AboutMe/>
      <Footer/>
    </>
  )
}

export default App
import Cursor from './components/Cursor';
import NavBar from './components/navbar/NavBar';
import Name from './components/name/Name';
import TeckStack from './components/tech-stack/TeckStack';
import TextBlock from './components/text-block/TextBlock';
import Works from './components/works/Works';
import AboutMe from './components/about-me/AboutMe';
import Footer from './components/footer/Footer';
import { ReactLenis } from '@studio-freight/react-lenis'

import './styles/global.sass';

function App(): JSX.Element {
  return(
    <ReactLenis root>
      <Cursor/>
      <NavBar/>
      <Name/>
      <TeckStack/>
      <TextBlock/>
      <Works/>
      <AboutMe/>
      <Footer/>
    </ReactLenis>
  )
}

export default App
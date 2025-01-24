import Cursor from './components/Cursor';
import NavBar from './components/navbar/NavBar';
import Name from './components/Name';
import TextBlockOne from './components/TextBlockOne';
import TeckStack from './components/TeckStack';
import TextBlockTwo from './components/TextBlockTwo';
import Works from './components/Works';

import './styles/global.sass';

function App() {
  return(
    <>
      <Cursor/>
      <NavBar/>
      <Name/>
      <TextBlockOne/>
      <TeckStack/>
      <TextBlockTwo/>
      <Works/>
    </>
  )
}

export default App
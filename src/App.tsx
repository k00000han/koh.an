import Cursor from './components/Cursor';
import NavBar from './components/navbar/NavBar';
import Name from './components/Name.tsx';
import TextBlockOne from './components/TextBlockOne.tsx';
import TeckStack from './components/TeckStack.tsx';
import TextBlockTwo from './components/TextBlockTwo.tsx';

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
    </>
  )
}

export default App
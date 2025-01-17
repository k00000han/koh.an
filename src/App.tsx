import Cursor from './components/Cursor';
import NavBar from './components/navbar/NavBar';
import Name from './components/name/Name';
import TextBlockOne from './components/text-sections/TextBlockOne';
import TextBlockTwo from './components/text-sections/TextBlockTwo';

import './styles/global.sass';

function App() {
  return(
    <>
      <Cursor/>
      <NavBar/>
      <Name/>
      <TextBlockOne/>
      <TextBlockTwo/>
    </>
  )
}

export default App
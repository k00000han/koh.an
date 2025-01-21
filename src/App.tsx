import Cursor from './components/Cursor';
import Scroll from './components/Scroll';
import NavBar from './components/navbar/NavBar';
import Name from './components/Name';
import TextBlockOne from './components/TextBlockOne';
import TeckStack from './components/TeckStack';
import TextBlockTwo from './components/TextBlockTwo';

import './styles/global.sass';

function App() {
  return(
    <>
      <Cursor/>
      <Scroll>
        <NavBar/>
        <Name/>
        <TextBlockOne/>
        <TeckStack/>
        <TextBlockTwo/>
      </Scroll>

    </>
  )
}

export default App
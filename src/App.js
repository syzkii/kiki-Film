import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';

import "./style/landingPage.css"
import Characters from './components/Characters';

function App() {
  return (
    <div>
      {/* Intro */}
      <div className="BG">
        <NavigationBar/>
        <Intro/>
      </div>
      {/* End Intro */}

      {/* Trending */}
      <div className='trending'>
        <Trending/>
      </div>
      {/* End Trending */}

      {/* Char */}
      <div className='characters'>
        <Characters/>
      </div>
       {/* End Char */}

    </div>
  );
}

export default App

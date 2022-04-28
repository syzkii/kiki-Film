import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';

import "./style/landingPage.css"

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
    </div>
  );
}

export default App

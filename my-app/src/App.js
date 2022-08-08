import './App.css';
import Heder from './components/heder'
import Manu from './components/manu'
import Content from './components/content'
import {myDescription, content} from './components/info'

function App() {
  return (
    <div className="App">
      <div className = "wrap">
        {Heder(myDescription.name, "App-header")}
          <div className = "content">
          <div className = "block-manu">
          {Manu("menu", myDescription.description, "elem-manu")}
          {Content ("info", content)}
          </div>
          <div className = "foto">
          <img className = "My-foto" src="/img/I.JPEG" alt="My foto"/>
         </div>
          </div>
      </div>
    </div>
  );
}

export default App;

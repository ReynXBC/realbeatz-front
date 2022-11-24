import './App.css';
import LoginForm
    from "./LoginForm";
import {useState} from 'react'

function App() {
    const [theme, setTheme] = useState({className: 'dark-theme', name:'Dark'})
    let themeName = 'Dark'
    function toggleTheme() {
        if (theme.className === 'light-theme') {
            setTheme({className: 'dark-theme', name:'Dark'})
        } else {
            setTheme({className: 'light-theme', name:'Light'})
        }
    }

  return (
      <>
          <div id={'top'}>
              <h1>RealBeats</h1>
          </div>
          <div id={'out'} className={theme.className}>
              <div id={'left'}>

              </div>
              <div id={'mid'}>
                  <LoginForm />
              </div>
              <div id={'right'}>
                  <button className={'btn'} onClick={toggleTheme}>{theme.name}</button>
              </div>
          </div>
      </>
  );
}

export default App;

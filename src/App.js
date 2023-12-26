import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    window.otpless = (otplessUser) => {
     alert(JSON.stringify(otplessUser));
     console.log(JSON.stringify(otplessUser));
    };
   }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="otpless-login-page">
          <script type="text/javascript" src="https://otpless.com/auth.js" cid="MGMBEBXJXGO6J8T4BMHETORV64V724VE"></script>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Weather from "./Weather";
import "./Weather.css";



function App() {
  return (
    <div className="App">
      <div className="container">
        <small> The Weather App</small>
        
        <Weather defaultCity="Madrid" />
      

      <footer>This project was developed by <a href="https://github.com/julietarod" target="_blank" rel="noreferrer">Julieta Rod </a> and is {" "}
        <a href="https://github.com/julietarod/the-react-app" target="_blank" rel="noreferrer">
           open sourced on GitHub
      </a>
      </footer> 
      </div>
      
    </div>
  );
}

export default App;

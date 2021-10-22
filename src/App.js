import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <small> The Weather App</small>

        <Weather defaultCity="Madrid" />

        <footer>
          This project was developed by{" "}
          <a
            href="https://github.com/julietarod"
            target="_blank"
            rel="noreferrer"
          >
            Julieta Rod{" "}
          </a>{" "}
          is{" "}
          <a
            href="https://github.com/julietarod/the-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://kind-bell-6158ac.netlify.app/">netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;

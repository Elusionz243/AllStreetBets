import "./App.scss";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

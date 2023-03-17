import "./App.css";
import { Header } from "./components/Header";
import { TextCarousel } from "./components/TextCarousel";

function App() {
  return (
    <div className="App bg-img-custom bg-cover bg-no-repeat bg-[#2F1893] min-h-screen">
      <Header />
      <TextCarousel />
    </div>
  );
}

export default App;

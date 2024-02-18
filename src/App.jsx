import { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import Search from "./components/Search";
function App() {
  const [search, setSearch] = useState("");
  const [weathers, setWeathers] = useState({});
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  // https://openweathermap.org/img/wn/${}@2x.png
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setWeathers(data));
  }, [search]);
  return (
    <div className="bg">
      <div className="w-[500px] mx-auto p-10 shadow-2xl bg-black/80 text-white">
        <h1 className="text-3xl font-bold text-center mb-5">Weather App</h1>
        <Search setSearch={setSearch} />
        {search !== "" ? (
          <Result weathers={weathers} />
        ) : (
          <p className="text-2xl font-semibold text-center mt-5">
            Please Enter the city
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

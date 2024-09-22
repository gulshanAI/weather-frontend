import { SearchIcon } from "lucide-react";
import { Input } from "./components/ui/input";
import SideBar from "./components/weather/Side/Index";
import MainIndex from "./components/weather/Main/Index";
import { useRef, useState } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [cityName, setCityName] = useState({
    location: "",
  });
  const changeCity = (value: string) => {
    setCityName({
      location: value,
    });
  };
  const searchWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      changeCity(inputRef.current.value);
    }
  };
  return (
    <div className="bg-slate-600 p-4">
      <main className="container md:max-w-7xl bg-secondary mx-auto h-full p-2 md:p-4 rounded-xl">
        <div className="grid md:grid-cols-4 gap-x-10">
          <div className="md:col-span-3 p-2 md:p-4">
            <form
              className="relative w-full"
              method="GET"
              onSubmit={searchWeather}
            >
              <Input
                type="text"
                ref={inputRef}
                placeholder="Search for a city"
                className="rounded-md"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-2 flex items-center"
              >
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
              </button>
            </form>
            <MainIndex cityName={cityName} />
          </div>
          <div>
            <SideBar changeCity={changeCity} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

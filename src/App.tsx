import { useState } from "react";
import PropertyCard from "./components/ui/PropertyCard";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? "dark" : ""}>
      <main className="min-h-screen flex flex-1 flex-col items-center justify-center font-sans">
        <button
          type="button"
          title="Toogle Dark Mode"
          className="bg-sky-500 p-2 rounded-2xl text-white font-medium cursor-pointer"
          onClick={() => setIsDark(!isDark)}
        >
          Toogle Dark Mode
        </button>
        <PropertyCard />
      </main>
    </div>
  );
}

export default App;

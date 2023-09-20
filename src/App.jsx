import { useEffect, useState } from "react"

import LeftColumn from "./components/LeftColumn"
import Navbar from "./components/Navbar"
import RightColumn from "./components/RightColumn"
import Sidebar from "./components/Sidebar"

function App() {

  // Display mode
  const [theme, setTheme] = useState((localStorage.getItem("theme")));

  useEffect(() => {

    // Save to local storage
    if (!theme) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", theme);
    }

    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <main className="flex bg-gray-100 dark:bg-slate-800">
      <Sidebar theme={theme} setTheme={setTheme} />
      <div className="flex flex-col flex-1 relative">
        <Navbar />
        <div className="grid md:grid-cols-3 grid-cols-1 w-full">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div className="w-full">
            <RightColumn />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App

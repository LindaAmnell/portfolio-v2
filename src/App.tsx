import { useState } from "react";
import "./App.css";
import About from "./pages/About/About.tsx";
import Experience from "./pages/Experience/Experience.tsx";
import Home from "./pages/Home/Home.tsx";
import type { Language } from "./types/language.ts";

function App() {
  const [language, setLanguage] = useState<Language>("sv");

  return (
    <>
      <Home language={language} />
      <About language={language} />
      <Experience language={language} />
    </>
  );
}

export default App;

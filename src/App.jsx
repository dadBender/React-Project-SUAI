// файл app.jsx
import Header from "./components/Header/Header";
import PageHome from "./components/PageHome/PageHome";
import PageSlider from "./components/PageSlider/PageSlider";
import PageInfo from "./components/PageInfo";
import PageAbout from "./components/PageAbout";

import { useState } from "react";

export default function App() {
  const [active, setActive] = useState("home"); // Добавляем состояние для отслеживания активного раздела

  const handleSectionChange = (newActive) => {
    setActive(newActive);
  };

  return (
    <>
      <Header active={active} onChange={handleSectionChange} />
      {active === "home" && <PageHome />}
      {active === "slider" && (
        <>
          <PageSlider />
        </>
      )}
      {active === "info" && (
        <>
          <PageInfo />
        </>
      )}
      {active === "aboutUs" && (
        <>
          <PageAbout />
        </>
      )}
    </>
  );
}

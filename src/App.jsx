import Header from "./components/Header/Header";
import { useState } from 'react';

export default function App() {
  const [active, setActive] = useState('home'); // Добавляем состояние для отслеживания активного раздела

  return (
    <>
      <Header active={active} onChange={(current) => setActive(current)} />
      {active === "home" && (
        <>
          <div>home</div>
        </>
      )}
      {active === "slider" && (
        <>
          <div>slider</div>
        </>
      )}
      {active === "info" && (
        <>
          <div>info</div>
        </>
      )}
      {active === "aboutUs" && (
        <>
          <div>aboutUs</div>
        </>
      )}
    </>
  );
}

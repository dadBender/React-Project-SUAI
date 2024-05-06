import "./Header.css";
import "./interactiveHeader"
import LinkSection from "./LinkSection";

export default function Header({ active, onChange }) { // Принимаем состояние и обработчик изменений как пропсы
  return (
    <header>
      <nav className="nav">
        <LinkSection
          isActive={active === 'home'}
          onClick={() => onChange('home')}
        >
          Home
        </LinkSection>
        <LinkSection
            
          isActive={active === "slider"}
          onClick={() => onChange("slider")}
        >
          Slider
        </LinkSection>
        <LinkSection
          isActive={active === "info"}
          onClick={() => onChange("info")}
        >
          Info
        </LinkSection>
        <LinkSection
          isActive={active === "aboutUs"}
          onClick={() => onChange("aboutUs")}
        >
          About Us
        </LinkSection>
        <span className="nav-indicator"></span>
      </nav>
    </header>
  );
}
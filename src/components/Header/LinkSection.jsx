// файл LinkSection.jsx
import React from 'react';

export default function LinkSection({ children, isActive, onClick }) { // Добавляем проп onClick
  return (
    <a 
      className={isActive ? "nav-item is-active" : "nav-item"} onClick={onClick} // Передаем обработчик onClick
    >
      {children}
    </a>
  );
}
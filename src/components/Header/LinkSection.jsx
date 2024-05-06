import React from 'react';

export default function LinkSection({ children, isActive }) { // Добавляем пропс isActive
  return (
    <a 
      className={isActive ? "nav-item is-active" : "nav-item"}
    >
      {children}
    </a>
  );
}
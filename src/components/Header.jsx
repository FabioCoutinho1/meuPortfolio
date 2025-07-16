import React from "react";

const Header = ({ scrollSmooth }) => {
  return (
    <header className="fixed top-0 left-0 w-full shadow z-50 flex justify-center items-center bg-white">
      <div className="max-w-7xl w-full flex justify-between p-4">
        <h1>Meu portfolio</h1>
        <nav>
          <ul className="flex justify-between gap-5">
            <li>
              <a href="#about" onClick={scrollSmooth.about}>
                Sobre mim
              </a>
            </li>
            <li>
              <a href="#projects" onClick={scrollSmooth.projects}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#skills" onClick={scrollSmooth.skills}>
                Habilidades
              </a>
            </li>
            <li>
              <a href="#contact" onClick={scrollSmooth.contact}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

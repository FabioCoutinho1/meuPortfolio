import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full shadow z-50 flex justify-center items-center">
      <div className="max-w-7xl w-full flex justify-between p-4 bg-amber-100">
        <h1>Meu portfolio</h1>
        <nav>
          <ul className="flex justify-between gap-5">
            <li>
              <a href="">Sobre mim</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Habilidades</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

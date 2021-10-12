import React, { useState, useCallback } from 'react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import Link from 'next/link';

import { Background, Container, Logo, MenuIcon, MenuBar } from './styles';
import { ThemeName } from '../../styles/themes';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const NavBar: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false);
        setTab(0);
      } else {
        setOpen(!open);
      }
    },
    [open],
  );

  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  return (
    <Background>
      <Container tab={tab} isOpen={open}>
        <Logo>
          <Link href="/">
            <img 
              onClick={(): void => handleOpen(true)}
              src="Logo.png"
            />
          </Link>
          <Link href="/">
            <h1>Kanaan Solutions</h1>
          </Link>
        </Logo>
        <MenuIcon onClick={(): void => handleOpen()} isOpen={open} tab={tab}>
          <MenuBar />
          <MenuBar />
          <MenuBar />
        </MenuIcon>
        <ul>
          {themeName === 'dark' ? (
            <FiSun size={28} color="#D4AE8B" onClick={toggleTheme} />
            ) : (
            <FaMoon size={22} color="#D4AE8B" onClick={toggleTheme} />
          )}
          <li>
            <Link href="/sobre">
              <p>serviços</p>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <p>sobre nós</p>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <p>portfolio</p>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <p>contato</p>
            </Link>
          </li>
        </ul>
      </Container>
    </Background>
  );
};

export default NavBar;
import React, { useState, useCallback } from 'react';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import Link from 'next/link';

import { useTheme } from '../../context/theme';
import { Background, Container, MenuIcon, MenuBar } from './styles';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);

  const { changeTheme, theme, lock } = useTheme();

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false);
        setTab(0);
        lock(false);
      } else {
        setOpen(!open);
        lock(true);
      }
    },
    [open, lock],
  );

  const handleNewTab = useCallback(
    (n: number): void => {
      setOpen(false);
      setTab(n);
      lock(false);
    },
    [lock],
  );

  return (
    <Background>
      <Container tab={tab} isOpen={open}>
        <Link href="/">
          <h1 onClick={(): void => handleOpen(true)}>André Luiz</h1>
        </Link>
        <MenuIcon onClick={(): void => handleOpen()} isOpen={open} tab={tab}>
          <MenuBar />
          <MenuBar />
          <MenuBar />
        </MenuIcon>
        <ul>
          {theme === 'dark' ? (
            <FaMoon size={22} color="#D4AE8B" onClick={changeTheme} />
            ) : (
            <FiSun size={28} color="#D4AE8B" onClick={changeTheme} />
          )}
          <li>
            <Link href="/cursos">
              <p onClick={(): void => handleNewTab(2)}>cursos</p>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <p onClick={(): void => handleNewTab(3)}>portfolio</p>
            </Link>
          </li>
          <li>
            <Link href="/contato">
              <p onClick={(): void => handleNewTab(4)}>contato</p>
            </Link>
          </li>
        </ul>
      </Container>
    </Background>
  );
};

export default NavBar;
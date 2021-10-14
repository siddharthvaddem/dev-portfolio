//  Guide followed to implement Light/Dark Mode
//https://electricanimals.com/articles/next-js-dark-mode-toggle

import styled from '@emotion/styled';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useState, useEffect } from 'react';
import Brightness3Icon from '@mui/icons-material/Brightness3';

const ToggleButton = styled.button`
  --toggle-width: 80px;
  --toggle-height: 38px;
  --toggle-padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out;
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  transform: ${(p) =>
    p.activeTheme === 'dark' ? 'translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)' : 'none'};
    &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  },
`;

const ThemeToggle = () => {
  const [ activeTheme, setActiveTheme ] = useState('dark');
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    savedTheme && setActiveTheme(savedTheme);
  }, []);

  useEffect(
    () => {
      document.body.dataset.theme = activeTheme;
      window.localStorage.setItem('theme', activeTheme);
    },
    [ activeTheme ]
  );
  return (
    <ToggleButton type="button" onClick={() => setActiveTheme(inactiveTheme)}>
      <ToggleThumb activeTheme={activeTheme} />
      <span aria-hidden={true}>
        <WbSunnyIcon style={{ fontSize: '24px', color: 'white' }} />
      </span>
      <span aria-hidden={true}>
        <Brightness3Icon style={{ fontSize: '24px', color: 'black' }} />
      </span>
    </ToggleButton>
  );
};

export default ThemeToggle;

import * as React from 'react';
import { hot } from 'react-hot-loader';
import { MainHeader } from './components/MainHeader/MainHeader'
import './style.scss';
import { initializeIcons } from '@uifabric/icons';
import { loadTheme } from 'office-ui-fabric-react';
initializeIcons();

loadTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#f3f9fd',
    themeLighter: '#d0e7f8',
    themeLight: '#a9d3f2',
    themeTertiary: '#5ca9e5',
    themeSecondary: '#1a86d9',
    themeDarkAlt: '#006cbe',
    themeDark: '#005ba1',
    themeDarker: '#004377',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#bab8b7',
    neutralSecondary: '#a3a2a0',
    neutralPrimaryAlt: '#8d8b8a',
    neutralPrimary: '#323130',
    neutralDark: '#605e5d',
    black: '#494847',
    white: '#ffffff',
  }
});

const App = () => (
  <section className="topmost-section">
    <header className="header">
      <MainHeader/>
    </header>
    <section className="tabs">Tabs</section>
    <main className="main-content">Editor</main>
    <nav className="sidemenu">
      <div>
        I am a floated element.
      </div>
    </nav>
    <footer className="footer">Footer</footer>
  </section>
)

export default hot(module)(App);
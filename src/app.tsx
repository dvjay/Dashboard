import * as React from 'react';
import { hot } from 'react-hot-loader';
import './style.scss';

const App = () => (
  <section className="topmost-section">
    <header className="header">Header</header>
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
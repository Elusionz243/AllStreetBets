import ASBlogo from "../../images/logos/logo.svg";

import "./Header.scss";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header__title">
        <a href="/">
          <img src={ASBlogo} alt="All Street Bets logo" />
        </a>
      </div>
      <div className="Header__links">
        <a href="/about">About</a>
        <a href="/community">Community</a>
        <a href="/tokenomics">Tokenomics</a>
        <a href="/team">Team</a>
      </div>
    </header>
  );
}

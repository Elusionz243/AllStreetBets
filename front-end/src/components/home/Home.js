import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home__hero">
        <h1 className="Home__hero-title">FREE YOUR MIND</h1>
        <div className="Home__hero-content">
          <a className="Home__bets-btn">GET $BETS ON BASE</a>
          <p className="Home__hero-description">
            All Street Bets ($BETS) represents freedom through a decentralized
            future. A culture coin brought to you by the founder of
            WallStreetBets & the web3 community.
          </p>
        </div>
      </div>
      <div className="Home__content">
        <div className="Home__content-title">
          <h2 className="Home__content-title-text">
            We are a community with a culturecoin
          </h2>
        </div>
      </div>
    </div>
  );
}

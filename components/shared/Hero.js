const Hero = () => (
  <section className="fj-hero">
    <div className="fj-hero-wrapper row">
      <div className="hero-left col-md-6">
        <h1 className="white hero-title">
          Hi! We are NextPWA Professional PWA development team
        </h1>
        <h2 className="white hero-subtitle">
          Explore this app to see the benefits <br /> of a Progressive Web App
        </h2>
        <div className="button-container">
          <a
            href="https://web.dev/progressive-web-apps"
            target="_blank"
            className="btn btn-main bg-blue ttu"
          >
            More about PWA
          </a>
        </div>
      </div>
      <div className="hero-right col-md-6">
        <div className="hero-image-container">
          <a className="grow hero-link">
            <img className="hero-image" src="/pwa-logo.svg"></img>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Brand direction",
    description: "A clear point of view that helps the right people find you.",
  },
  {
    number: "02",
    title: "Digital experiences",
    description: "Useful, thoughtful websites built around real people.",
  },
  {
    number: "03",
    title: "Creative partnership",
    description: "A steady extra set of hands from first idea to final detail.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Independent creative studio · Working everywhere
          </p>
          <h1>
            Make room for
            <br />
            <span>what matters.</span>
          </h1>
          <p className="hero-description">
            We help good people turn big ideas into clear brands and digital
            experiences that feel like them.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/about">
              Get to know us <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/contact">
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div aria-label="Abstract illustration of overlapping colorful shapes" className="hero-art" role="img">
          <div className="art-sun" />
          <div className="art-orbit" />
          <div className="art-shape art-shape-one" />
          <div className="art-shape art-shape-two" />
          <div className="art-shape art-shape-three" />
          <span className="art-caption">A little more human, by design.</span>
          <span aria-hidden="true" className="art-star">
            ✳
          </span>
        </div>
      </section>

      <section className="intro-section">
        <p className="eyebrow">A good place to begin</p>
        <div className="intro-content">
          <h2>
            The best work starts with <span>a real connection.</span>
          </h2>
          <p>
            We bring curiosity, care, and a little bit of courage to every
            project. No one-size-fits-all answers—just thoughtful work made
            together.
          </p>
        </div>
      </section>

      <section className="services-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we bring to the table</p>
            <h2>Small studio. Big-picture thinking.</h2>
          </div>
          <Link className="text-link" href="/about">
            More about us <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span aria-hidden="true" className="service-arrow">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <p className="eyebrow">Have a good feeling about this?</p>
        <h2>Let&apos;s make something meaningful.</h2>
        <Link className="button button-light" href="/contact">
          Tell us what you&apos;re thinking <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

import Link from "next/link";

export const metadata = {
  title: "About | Common Ground Studio",
  description: "Meet Common Ground Studio and learn how we approach our work.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          A little about us
        </p>
        <h1>
          Good work is
          <br />
          <span>never done alone.</span>
        </h1>
        <p className="page-lede">
          Common Ground is an independent creative studio for people building
          something that matters.
        </p>
      </section>

      <section className="about-story">
        <div className="story-note">
          <span className="story-symbol" aria-hidden="true">
            ✳
          </span>
          <p>Thoughtful by nature. Collaborative by design.</p>
        </div>
        <div className="story-copy">
          <p className="eyebrow">Our point of view</p>
          <h2>There&apos;s more than one way to make a difference.</h2>
          <p>
            We believe the most meaningful work comes from paying attention:
            to the people you serve, the things you stand for, and the details
            that make your story yours.
          </p>
          <p>
            So we start with good questions and open minds. Then we bring
            strategy, design, and a genuine sense of partnership to help turn
            your next idea into something real.
          </p>
        </div>
      </section>

      <section className="values-section">
        <p className="eyebrow">How we like to work</p>
        <div className="values-grid">
          <article>
            <span>01</span>
            <h3>Listen first</h3>
            <p>Understanding comes before making. We take time to get there.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Keep it human</h3>
            <p>People are at the heart of every good idea and every decision.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Make it matter</h3>
            <p>We focus on the useful, the lasting, and the genuinely good.</p>
          </article>
        </div>
      </section>

      <section className="simple-cta">
        <h2>Have something good in mind?</h2>
        <Link className="button button-dark" href="/contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}

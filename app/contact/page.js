import Link from "next/link";

export const metadata = {
  title: "Contact | Common Ground Studio",
  description: "Get in touch with Common Ground Studio to talk about your next idea.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <p className="eyebrow">
          <span className="eyebrow-dot" aria-hidden="true" />
          Your next good thing starts here
        </p>
        <h1>
          Tell us what
          <br />
          <span>you have in mind.</span>
        </h1>
        <p className="page-lede">
          A first conversation doesn&apos;t need a finished plan. Just bring
          your questions, your what-ifs, or that idea you can&apos;t stop
          thinking about.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-card">
          <span className="contact-icon" aria-hidden="true">
            ↗
          </span>
          <p className="eyebrow">The easiest first step</p>
          <h2>Drop us a note.</h2>
          <p>
            Share a little about what you&apos;re working on and we&apos;ll
            take it from there.
          </p>
          <a className="contact-email" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </div>
        <div className="contact-aside">
          <p className="eyebrow">A few helpful details</p>
          <div className="contact-detail">
            <span>01</span>
            <p>Tell us what you&apos;re hoping to make or change.</p>
          </div>
          <div className="contact-detail">
            <span>02</span>
            <p>Let us know what a good outcome would look like.</p>
          </div>
          <div className="contact-detail">
            <span>03</span>
            <p>We&apos;ll get back to you and find a time to talk.</p>
          </div>
          <Link className="text-link" href="/about">
            Get to know us first <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

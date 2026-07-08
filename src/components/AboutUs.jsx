import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <main className="landing-page">
      <section className="landing-card">
        <p className="eyebrow">Welcome to</p>
        <h1>Paradise Nursery</h1>
        <p className="about-text">
          Paradise Nursery helps plant lovers create calm, beautiful, and healthy
          indoor spaces with carefully selected houseplants. From air-purifying
          favorites to low-maintenance succulents and tropical statement plants,
          we make it easy to find the perfect greenery for your home or office.
        </p>
        <Link className="primary-button" to="/plants">
          Get Started
        </Link>
      </section>
    </main>
  );
}

export default AboutUs;

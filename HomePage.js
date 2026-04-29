function Home() {
  return (
    <>
      <section className="hero">
        <h1>Speak Without Borders</h1>
        <p>Translate 134 languages instantly with 98% accuracy</p>
        <button className="btn">Buy Now</button>
      </section>

      <div className="container">
        <h2>🔥 Featured Product</h2>
        <div className="grid">
          <div className="card">
            <h3>iEnlighten Minds Pen</h3>
            <p>Real-time translation with offline support.</p>
            <p><strong>R999 (Student)</strong></p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="grid">
          <div className="card">134 Languages</div>
          <div className="card">Works Offline</div>
          <div className="card">Student Friendly</div>
        </div>
      </div>
    </>
  );
}

export default Home;

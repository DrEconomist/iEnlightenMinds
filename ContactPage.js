function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>

      <p>Email: info@ienlightenminds.com</p>
      <p>Phone: +27 XXX XXX XXX</p>

      <form>
        <input placeholder="Name" /><br /><br />
        <input placeholder="Email" /><br /><br />
        <textarea placeholder="Message"></textarea><br /><br />
        <button className="btn">Send</button>
      </form>
    </div>
  );
}

export default Contact;

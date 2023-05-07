export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        {" "}
        Contact <span>Me! </span>
      </h2>
      <from className="form-container" action="#">
        <div className="input-box">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile Number" />
          <input type="text" placeholder="Email Subject" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Messege Please..."
        ></textarea>
        <input type="submit" value="Send Message" class="btn" />
      </from>
    </section>
  );
}

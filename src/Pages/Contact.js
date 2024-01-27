export default function Contact() {
  return (
    <div className="page contact-page">
      <form className="contact-form">
        <fieldset>
          <legend className="contact-form-legend">
            <strong>Reach out to US!</strong>
          </legend>
          <input
            type="Email"
            className="contact-form-input"
            placeholder="Email"
          />
          <br />
          <textarea
            className="contact-form-input"
            placeholder="Comments"
            style={{fontSize:"20px",height:"200px"}}
          ></textarea>
          <br />
          <button type="submit" className="input_btn">
            Send
          </button>
        </fieldset>
      </form>
    </div>
  );
}

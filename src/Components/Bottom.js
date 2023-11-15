export default function Bottom() {
  return (
    <div className="footer">
      <form>
        <fieldset>
            <legend className="Gallery">Reach out to US!</legend>
          <input type="Email" className="input" placeholder="Email" /><br />
          <textarea className="input" placeholder="Comments"></textarea><br />
          <button type="submit" className="input_btn">Send</button>
        </fieldset>
      </form>
      <div>
        Others
      </div>
    </div>
  );
}

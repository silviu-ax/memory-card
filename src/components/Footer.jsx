const Footer = () => 
   (
    <footer>
      <p>
        Data provided by{" "}
        <a id="thrones-api" href="https://thronesapi.com/" target="_blank" rel="noreferrer">
          thronesapi.com
        </a>
      </p>
      <div className="footer-links">
        <a
          id="linked-in"
          // update linked in href
          href="/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a
          id="github"
          href="https://github.com/alleizon/memory-card"
          target="_blank" rel="noreferrer"
        >
          <i className="fa-brands fa-github" />
        </a>
      </div>
    </footer>
  );
;

export default Footer;

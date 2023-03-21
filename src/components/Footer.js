const Footer = () => {
  return (
    <footer>
      <p>
        Data provided by{" "}
        <a id="thrones-api" href="https://thronesapi.com/" target="_blank">
          thronesapi.com
        </a>
      </p>
      <div className="footer-links">
        <a
          id="linked-in"
          // href="UPDATE LINKED IN"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          id="github"
          href="https://github.com/alleizon/memory-card"
          target="_blank"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

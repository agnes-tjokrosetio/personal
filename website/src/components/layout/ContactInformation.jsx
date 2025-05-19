function ContactInformation() {
  return (
    <div className="h-auto py-[5vh] px-[5vw] flex flex-row justify-center text-left gap-6">
      <a
        className="!text-white hover:text-gray-400 transition duration-300"
        href="https://www.linkedin.com/in/agnestjokrosetio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin !text-2xl" aria-hidden="true"></i>
      </a>
      <a
        className="!text-white hover:text-gray-400 transition duration-300"
        href="https://github.com/agnes-tjokrosetio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github !text-2xl" aria-hidden="true"></i>
      </a>
      <a
        className="!text-white hover:text-gray-400 transition duration-300"
        href="mailto:agnes.tjokrosetio@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-envelope !text-2xl" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default ContactInformation;

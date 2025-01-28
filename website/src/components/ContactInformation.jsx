import { ContactIcon, ContactSection } from "./Styles";

function ContactInformation() {
  return (
    <ContactSection>
      <ContactIcon href="https://www.linkedin.com/in/agnestjokrosetio/" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </ContactIcon>
      <ContactIcon href="https://github.com/agnes-tjokrosetio" target="_blank" rel="noopener noreferrer">
        <i class="fa fa-github" aria-hidden="true"></i>
      </ContactIcon>
      <ContactIcon href="mailto:agnes.tjokrosetio@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </ContactIcon>
    </ContactSection>
  );
}

export default ContactInformation;

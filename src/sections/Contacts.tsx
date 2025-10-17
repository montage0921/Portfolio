import ContactInfo from "../components/ContactInfo";
import EmailForm from "../components/EmailForm";
import SectionTitle from "../utility/SectionTitle";

export default function Contacts() {
  return (
    <div
      id="contact"
      className="min-h-screen pt-30 flex flex-col items-center gap-3"
    >
      <SectionTitle text="Get In" coloredText="Touch" />
      <p className="max-w-sm md:max-w-2xl text-center">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunitie
      </p>
      <div className="flex flex-col md:flex-row">
        <ContactInfo />
        <EmailForm />
      </div>
    </div>
  );
}

import { Linkedin, Mail, MapPinHouse, Phone } from "lucide-react";
import ContactComponent from "../utility/ContactComponent";
import GithubIcon from "../utility/GithubIcon";
import Wechat from "../utility/Wechat";

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-center gap-3 md:mr-20 ">
      <h1 className="text-2xl font-semibold opacity-80">Contact Information</h1>
      <div className="flex flex-col gap-5">
        <ContactComponent contactType="Email" contactInfo="teshi@buffalo.edu">
          <Mail />
        </ContactComponent>
        <ContactComponent contactType="Phone" contactInfo="+1 (716)-520-7871">
          <Phone />
        </ContactComponent>
        <ContactComponent contactType="Location" contactInfo="Buffalo, NY, USA">
          <MapPinHouse />
        </ContactComponent>
      </div>
      <div>
        <p className="pt-5 opacity-80 text-lg">Connect with me</p>
        <div className="pt-2 flex gap-3 justify-center">
          <a
            className="hover:text-[hsl(var(--theme-color))] hover:cursor-pointer"
            href="https://www.linkedin.com/in/te-shi-3937381b7/"
            target="_blank"
          >
            <Linkedin />
          </a>

          <GithubIcon href="https://github.com/montage0921" />
          <Wechat />
        </div>
      </div>
    </div>
  );
}

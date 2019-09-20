import * as React from "react";
import "./contentContact.css";
import { PhoneNumbers } from "Components/SimpleComponents/PhoneNumbers/PhoneNumbers";
import { Resources } from "Resources/Resources";
import { ContactForm } from "./ContactForm/ContactForm";
import { Footer } from '../Footer/Footer';

interface Props { }
interface State { }

export class ContentContact extends React.Component<Props, State> {
  render() {
    return (
      <div className="Content">
        <div className="Contact">
          <div className="CompanyContent">
            <p className="Tittle">{Resources.TextResources.ContentContact.ContactBox.Tittle}</p>
            <p className="Text">{Resources.TextResources.ContentContact.ContactBox.FirstLine}</p>
            <p className="Text">{Resources.TextResources.ContentContact.ContactBox.SecondLine}</p>
            <p className="Text">{Resources.TextResources.ContentContact.ContactBox.ThirdLine}</p>
            <p className="Text">{Resources.TextResources.ContentContact.ContactBox.FourthLine}</p>
          </div>
          <div className="PhoneContact">
            <p className="Tittle"> {Resources.TextResources.ContentContact.PhoneContact}</p>
            <div className="Value">
              <PhoneNumbers NumberPosittion="center" />
            </div>
          </div>
          <div className="EmailContact">
            <p className="Tittle">{Resources.TextResources.ContentContact.EmailContact}</p>
            <div className="Value">
              <p className="Text">{Resources.TextResources.ContentContact.EmailAddress}</p>
            </div>
          </div>
          <ContactForm />
        </div>
        <Footer />
      </div>
    );
  }
}

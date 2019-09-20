import * as React from "react";
import "./contactForm.css";
import { Resources } from "Resources/Resources";
import { Form, Button } from "react-bootstrap";

interface Props {}
interface State {
  email: string;
  phoneNumber: string;
  topic: string;
  question: string;
}

export class ContactForm extends React.Component<Props, State> {
  state = {
    email: "",
    phoneNumber: "",
    topic: "",
    question: ""
  };
  render() {
    return (
      <Form className="ContentContact">
        {this.getEditTextWithLabel(Resources.TextResources.ContentContact.ContactForm.Email, "email")}
        {this.getEditTextWithLabel(Resources.TextResources.ContentContact.ContactForm.NumberPhone, "phoneNumber")}
        {this.getEditTextWithLabel(Resources.TextResources.ContentContact.ContactForm.Topic, "topic")}
        {this.getEditTextWithLabel(Resources.TextResources.ContentContact.ContactForm.Question, "question", true)}
        <Button
          onClick={() => {
            this.didClickSend();
          }}
          value={Resources.TextResources.ContentContact.ContactForm.Send}
        >
          {Resources.TextResources.ContentContact.ContactForm.Send}
        </Button>
      </Form>
    );
  }

  private getEditTextWithLabel(labelName: string, id: string, isTextArea: boolean = false) {
    const context = this;

    return (
      <div className="ContactField">
        <label>{labelName}</label>
        {this.getInput(isTextArea, context, id)}
      </div>
    );
  }
  private getInput(isTextArea: boolean, context: this, id: string) {
    return isTextArea ? (
      <textarea
        onChange={event => {
          this.didChangeStateValue(event.target.value, context, id);
        }}
      />
    ) : (
      <input
        type="text"
        id={id}
        onChange={event => {
          this.didChangeStateValue(event.target.value, context, id);
        }}
      />
    );
  }

  didChangeStateValue(event: string, context: this, parameterNameToModify: string) {
    var objectToState: any = {};
    objectToState[parameterNameToModify] = event;
    context.setState(objectToState);
  }
  didClickSend() {
    const email = this.state.email !== "" ? Resources.TextResources.ContentContact.ContactForm.MailTo.MailAddress + this.state.email : "";
    const phoneNumber = this.state.phoneNumber !== "" ? Resources.TextResources.ContentContact.ContactForm.MailTo.PhoneNumber + this.state.phoneNumber : "";
    const body = "" + this.state.question + "\n Proszę o kontakt:\n" + email + "\n" + phoneNumber;
    const subject = "?subject=" + this.state.topic;
    window.location.href = "mailto:" + Resources.TextResources.ContentContact.EmailAddress + subject + "&body=" + encodeURIComponent(body);
  }
}

import * as React from "react";
import { Resources } from "Resources/Resources";
import "./phoneNumbers.css";

interface Props {
  NumberPosittion?: string;
}
interface State { }

export class PhoneNumbers extends React.Component<Props, State> {
  render() {
    return (
      <div className={this.props.NumberPosittion === "center" ? "NumbersCenter" : "NumbersDefault"}>
        <div className="InLineText">
          <label className="Text">{Resources.TextResources.ContentContact.Rafal}</label>
          <p className="Text">{Resources.TextResources.PhoneNumbers.PhoneNumberOne}</p>
        </div>
        <div className="InLineText">
          <label className="Text">{Resources.TextResources.ContentContact.Jacek}</label>
          <p className="Text">{Resources.TextResources.PhoneNumbers.PhoneNumberTwo}</p>
        </div>
      </div >
    );
  }
}

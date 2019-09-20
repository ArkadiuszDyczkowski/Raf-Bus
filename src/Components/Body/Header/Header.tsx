import * as React from "react";
import { Resources } from "Resources/Resources";
import { MenuBar } from "Components/SimpleComponents/MeuBar/MenuBar";
import "./header.css";
import { SocialMediaIcons } from "Components/SimpleComponents/SocialMediaIcons/SocialMediaIcons";
import { SocialMedia } from "Resources/SocialMedia";
import { PhoneNumbers } from '../../SimpleComponents/PhoneNumbers/PhoneNumbers';

interface Props { }
interface State { }

export class Header extends React.Component<Props, State> {
  render() {
    return (
      <div className="HeaderContainer">
        {this.getSocialMedia()}
        <div className="PhoneNumbersContainer"><PhoneNumbers/></div>
        <div id="header">
          <div className="ImageLevel">
            {this.getImage()}
          </div>
          <MenuBar url="" />
          <div />
        </div>
      </div>
    );
  }

  getSocialMedia() {
    return (
      <div>
        <SocialMediaIcons faceBookUrl={SocialMedia.Facebook.link} instagramUrl={SocialMedia.Instagram.link} />
      </div>
    );
  }
  getImage() {
    return (
      <div className="ImageContainer">
        <img
          className="Image"
          alt=""
          src="Img/logo.png"
          onClick={() => {
            window.location.href = Resources.TextResources.Href.MainSite;
            window.location.reload();
          }}
        />
      </div>
    );
  }
}

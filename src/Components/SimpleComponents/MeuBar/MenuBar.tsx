import * as React from "react";
import "./menuBar.css";
import { Resources } from "Resources/Resources";

interface Props {
  url: string;
}

interface State {}

export class MenuBar extends React.Component<Props, State> {
  render() {
    const context = this;
    return (
      <div className="ButtonsBar">
        <div className="MarginContainer">
          {this.getButton(context, Resources.TextResources.MenuBar.MainSite, 1)}
          {this.getButton(context, Resources.TextResources.MenuBar.Direction, 2)}
          {this.getButton(context, Resources.TextResources.MenuBar.RentBus, 3)}
          {this.getButton(context, Resources.TextResources.MenuBar.AboutUs, 4)}
          {this.getButton(context, Resources.TextResources.MenuBar.ContactUs, 5)}
        </div>
      </div>
    );
  }

  getButton(context: this, id: string, line: number) {
    var button = (
      <p
        id={id}
        className={"Text Button" + line}
        onClick={() => {
          context.didClickButton(context, id);
        }}
      >
        {id}
      </p>
    );
    return button;
  }

  didClickButton(_context: this, source: string) {
    switch (source) {
      case Resources.TextResources.MenuBar.MainSite: {
        window.location.href = Resources.TextResources.Href.MainSite;
        break;
      }
      case Resources.TextResources.MenuBar.RentBus: {
        window.location.href = Resources.TextResources.Href.RentBus;
        break;
      }
      case Resources.TextResources.MenuBar.AboutUs: {
        window.location.href = Resources.TextResources.Href.AboutUs;
        break;
      }
      case Resources.TextResources.MenuBar.Direction: {
        window.location.href = Resources.TextResources.Href.Direction;
        break;
      }
      case Resources.TextResources.MenuBar.ContactUs: {
        window.location.href = Resources.TextResources.Href.ContactUs;
      }
    }
    window.location.reload();
  }

  componentDidMount() {
    const href = "/#" + window.location.href.split("#")[1];
    switch (href) {
      case Resources.TextResources.Href.RentBus: {
        this.setChoosenTap(Resources.TextResources.MenuBar.RentBus);
        break;
      }
      case Resources.TextResources.Href.AboutUs: {
        this.setChoosenTap(Resources.TextResources.MenuBar.AboutUs);
        break;
      }
      case Resources.TextResources.Href.Direction: {
        this.setChoosenTap(Resources.TextResources.MenuBar.Direction);
        break;
      }
      case Resources.TextResources.Href.ContactUs: {
        this.setChoosenTap(Resources.TextResources.MenuBar.ContactUs);
        break;
      }
      default: {
        this.setChoosenTap(Resources.TextResources.MenuBar.MainSite);
        break;
      }
    }
  }

  setChoosenTap(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.className += " Active";
    }
  }
}

import * as React from "react";

import "./socialMediaIcons.css";

interface Props {
  faceBookUrl?: string;
  instagramUrl?: string;
}
interface State { }

export class SocialMediaIcons extends React.Component<Props, State> {
  render() {
    return (
      <div className="SocialMediaIconsContainer">
        {/* {this.getButton(this.props.instagramUrl, "fa fa-instagram ")} */}
        {this.getButton(this.props.faceBookUrl, "fa fa-facebook FBAnimation" , "FB")}
      </div>
    );
  }

  getButton(url: string | undefined, className: string, id?: string) {
    return url ? <a href={url} className={className} id={id}><div /></a> : <div />;
  }

  componentDidMount() {
    infinityLoop();
  }
}

async function infinityLoop() {
  const element = document.getElementById("FB");
  var index = 0;
  if (element) while (true) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (index === 0) {
      element.className = "fa fa-facebook FBAnimation Hidden";
      index = 1;
      continue;
    }
    if (index === 1) {
      element.className = "fa fa-facebook FBAnimation";
      index = 0;
      continue;
    }
  }
}
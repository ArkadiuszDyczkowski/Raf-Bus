import * as React from "react";
import { Resources } from "Resources/Resources";
import "./googleMaps.css";
import { Button } from 'react-bootstrap';

interface Props {
  tittle: string;
}
interface State {
  url: string;
}

export class GoogleMaps extends React.Component<Props, State> {
  state = {
    url: Resources.TextResources.Map.BP
  };
  render() {
    return (
      <div className="GoogleMaps">
        <p className="Title">{this.props.tittle}</p>
        <div className="Locations">
          {this.getLocation(Resources.TextResources.Map.BP, Resources.TextResources.ContentSchedule.BP)}
          {this.getLocation(Resources.TextResources.Map.Terespol, Resources.TextResources.ContentSchedule.Terespol)}
          {this.getLocation(Resources.TextResources.Map.Brzesc, Resources.TextResources.ContentSchedule.B)}
        </div>
        <iframe src={this.state.url} title={this.props.tittle} />
      </div>
    );
  }

  getLocation(url: string, name: string): JSX.Element {
    return (
      <Button className="Button Text"
        onClick={() => {
          this.setState({ url: url });
        }}
      >
        {name}
      </Button>
    );
  }
}

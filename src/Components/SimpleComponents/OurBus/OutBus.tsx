import * as React from "react";
import { Resources } from "Resources/Resources";
import "./outBus.css";
import { Functions } from "Resources/Functions";

interface Props {
  tittle: string;
  placesNumber: string;
  eqipment: string[];
  image:string;
}

interface State {}

export class OurBus extends React.Component<Props, State> {
  render() {
    return (
      <div className="BussContainer">
        <div className="Title">{this.props.tittle}</div>
        <div className="PlaceNumber">
          <p className="Text">{Resources.TextResources.OurBusses.NumberOfPlaces}</p>
          <p className="Text">{this.props.placesNumber}</p>
        </div>
        <div className="EqipmentName Title">{Resources.TextResources.OurBusses.Eqipment}</div>
        <ul className="Eqipment">
          {Functions.getLisOfComponenetsFromListOfStrings(this.props.eqipment)}
        </ul>
        <img src={this.props.image} alt=""/>
      </div>
    );
  }
}

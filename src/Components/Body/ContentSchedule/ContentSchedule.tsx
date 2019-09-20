import * as React from "react";
import "./contentSchedule.css";
import { Resources } from "Resources/Resources";
import { Data } from "Resources/Schedule";
import { Functions } from "Resources/Functions";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { Table } from "Components/SimpleComponents/Table/Table";
import { GoogleMaps } from "Components/SimpleComponents/GoogleMaps/GoogleMaps";
import { Footer } from '../Footer/Footer';

interface Props { }
interface State { }

export class ContentSchedule extends React.Component<Props, State> {
  render() {
    return (
      <div className="Content">
        <div className="Schedule">
          <p className="Title">{Resources.TextResources.ContentSchedule.Schedule}</p>
          {this.getTableWithToolTip()}
          <div className="GoogleMapsContainer">
            <GoogleMaps tittle={Resources.TextResources.ContentSchedule.Stations} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  getTableWithToolTip() {
    const placement = Functions.isMobile.any() ? "bottom" : "left";
    return (
      <OverlayTrigger placement={placement} overlay={this.getOverLayPopUp()}>
        <div className="TableContainer">
          <Table data={Data} sizePercentColumn="30;30;30;30" />
        </div>
      </OverlayTrigger>
    );
  }

  getOverLayPopUp() {
    return (
      <Popover id={`popover-positioned-left`}>
        <Popover.Title as="h3">{`Popover left`}</Popover.Title>
        <Popover.Content>
          <div className="Legend">
            <p className="Title">{Resources.TextResources.ContentSchedule.Legend.First}</p>
            <p className="Title">{Resources.TextResources.ContentSchedule.Legend.Second}</p>
            <p className="Title">{Resources.TextResources.ContentSchedule.Legend.Third}</p>
          </div>
        </Popover.Content>
      </Popover>
    );
  }
}

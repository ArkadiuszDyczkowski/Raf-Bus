import * as React from "react";
import "./mainSideContent.css";
import { Data } from "Resources/Schedule";
import { Resources } from "Resources/Resources";
import { Table } from "Components/SimpleComponents/Table/Table";
import { Posts } from "Components/SimpleComponents/Posts/Posts";
import { Footer } from '../Footer/Footer';

interface Props { }
interface State { }

export class MainSideContent extends React.Component<Props, State> {
  render() {
    return (
      <div className="Content">
        <div className="MainSide">
          <p className="Title">{Resources.TextResources.MainSideContent.Schedule}</p>
          <p className="SubTitle">{Resources.TextResources.MainSideContent.Direction}</p>
          <div
            className="TableContainer"
            onClick={() => {
              window.location.href = Resources.TextResources.Href.Direction;
              window.location.reload();
            }}
          >
            <Table data={Data} sizePercentColumn="30;30;30;30" />
          </div>
          <p className="SubTitle">{Resources.TextResources.MainSideContent.OurBusses}</p>
          <Posts />
        </div>
        <Footer />
      </div>
    );
  }
}

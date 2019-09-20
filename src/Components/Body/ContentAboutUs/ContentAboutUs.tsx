import * as React from "react";
import { GoogleMaps } from "Components/SimpleComponents/GoogleMaps/GoogleMaps";
import { Resources } from "Resources/Resources";
import "./contentAboutUs.css";
import { Footer } from '../Footer/Footer';

interface Props { }
interface State { }

export class ContentAboutUs extends React.Component<Props, State> {
  render() {
    return (
      <div className="Container">
        <div className="AboutUs Text">
          <div>
            {Resources.TextResources.AboutUs.InformationFirst}<br />
            {Resources.TextResources.AboutUs.InformationSecond}<br />
            {Resources.TextResources.AboutUs.InformationThird}<br />
            {Resources.TextResources.AboutUs.InformationFourth}<br />
            {Resources.TextResources.AboutUs.InformationFifth}<br />
            {Resources.TextResources.AboutUs.InformationSixth}<br />
            {Resources.TextResources.AboutUs.InformationSeventh}<br />
            {Resources.TextResources.AboutUs.InformationEighth}<br />
            {Resources.TextResources.AboutUs.InformationNinenth}<br />
            {Resources.TextResources.AboutUs.InformationTenth}<br />
          </div>
          <GoogleMaps tittle={Resources.TextResources.ContentSchedule.Stations} />
        </div>
        <Footer />
      </div>
    );
  }
}

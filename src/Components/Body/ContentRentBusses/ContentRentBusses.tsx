import * as React from "react";
import { Resources } from "Resources/Resources";
import "./contentRentBusses.css";
import { OurBus } from "Components/SimpleComponents/OurBus/OutBus";
import { Footer } from '../Footer/Footer';

interface Props { }
interface State { }

export class ContentRentBusses extends React.Component<Props, State> {
  render() {
    return (
      <div className="Content">
        <div className="RentBus">
          <p className="Title">{Resources.TextResources.OurBusses.OurBusses}</p>
          <OurBus
            tittle={Resources.TextResources.OurBusses.FirstBus.Name}
            placesNumber={Resources.TextResources.OurBusses.FirstBus.NumberOfPlaces}
            eqipment={Resources.TextResources.OurBusses.FirstBus.Eqipment}
            image={Resources.TextResources.OurBusses.FirstBus.Image}
          ></OurBus>
          <OurBus
            tittle={Resources.TextResources.OurBusses.SecondBus.Name}
            placesNumber={Resources.TextResources.OurBusses.SecondBus.NumberOfPlaces}
            eqipment={Resources.TextResources.OurBusses.SecondBus.Eqipment}
            image={Resources.TextResources.OurBusses.SecondBus.Image}
          ></OurBus>
          <OurBus
            tittle={Resources.TextResources.OurBusses.ThirdBus.Name}
            placesNumber={Resources.TextResources.OurBusses.ThirdBus.NumberOfPlaces}
            eqipment={Resources.TextResources.OurBusses.ThirdBus.Eqipment}
            image={Resources.TextResources.OurBusses.ThirdBus.Image}
          ></OurBus>
        </div>
        <Footer />
      </div>
    );
  }
}

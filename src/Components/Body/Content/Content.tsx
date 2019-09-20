import * as React from "react";
import { MainSideContent } from "../MainSideContent/MainSideContent";
import { ContentSchedule } from "../ContentSchedule/ContentSchedule";
import { ContentContact } from '../ContentContact/ContentContact';
import { ContentRentBusses } from "../ContentRentBusses/ContentRentBusses";
import { ContentAboutUs } from '../ContentAboutUs/ContentAboutUs';
import { Resources } from "Resources/Resources";

interface Props {}
interface State {}

export class Content extends React.Component<Props, State> {
  render() {
    const href = window.location.href;
    const splitetHref = href.split("#")[1];
    switch (splitetHref) {
      case Resources.TextResources.Href.Direction.split("#")[1]: {
        return <ContentSchedule />;
      }
      case Resources.TextResources.Href.ContactUs.split("#")[1]:{
        return <ContentContact/>;
      }
      case Resources.TextResources.Href.RentBus.split("#")[1]:{
        return <ContentRentBusses/>
      }
      case Resources.TextResources.Href.AboutUs.split("#")[1]:{
        return <ContentAboutUs/>
      }
      default: {
        return <MainSideContent />;
      }
    }
  }
}

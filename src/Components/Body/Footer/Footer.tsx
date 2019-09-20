import * as React from "react";
import { Resources } from "Resources/Resources";
import "./footer.css";
interface Props { }

interface State { }

export class Footer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className="Footer">
            <img className="Image" src="Img/logoWhite.png" alt="" />
            <div> {Resources.TextResources.ContentContact.ContactBox.FirstLine}</div>
            <div> {Resources.TextResources.ContentContact.ContactBox.SecondLine}</div>
            <div> {Resources.TextResources.ContentContact.ContactBox.ThirdLine}</div>
            <div> {Resources.TextResources.ContentContact.ContactBox.FourthLine}</div>
        </div>
    }
}
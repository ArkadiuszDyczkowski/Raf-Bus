import * as React from "react";
import "./slideShow.css";

interface Props {}
interface State {
  indexCurentPhoto: number;
}

interface PhotoObject {
  name: string;
  url: string;
}

export class SlideShow extends React.Component<Props, State> {
  images: JSX.Element[] = [];
  interval: number = -1;
  index: number = 0;
  photosDataToMount: PhotoObject[] = [];

  componentWillMount() {
    this.images = [];
    this.photosDataToMount = [
      { name: "photoOne.jpg", url: "http://www.google.com/" },
      { name: "photoTwo.jpg", url: "http://www.google.com/" },
      { name: "photoThree.jpg", url: "http://www.google.com/" },
      { name: "photoFour.jpg", url: "http://www.google.com/" }
    ];
    this.photosDataToMount.forEach(photoData => {
      this.images.push(
        this.configureImage("Photo", photoData, () => {
          window.location.href = photoData.url;
        })
      );
    });
    this.setState({ indexCurentPhoto: 0 });
  }

  render() {
    return (
      <div className="PhotoContainer">
        <div>{this.images[this.state.indexCurentPhoto]}</div>
        <div className="MiniPhotoList">{this.getMiniPhotoList()}</div>
      </div>
    );
  }

  getMiniPhotoList(): JSX.Element[] {
    const context = this;
    var returnList: any[] = [];
    returnList.push(this.getArrow(true));

    this.photosDataToMount.forEach((photoData, index) => {
      const image = this.configureImage("MiniPhoto", photoData, () => {
        context.setState({ indexCurentPhoto: index });
      });
      returnList.push(image);
    });

    returnList.push(this.getArrow(false));
    return returnList;
  }

  getArrow(previous?: boolean): JSX.Element {
    const context = this;
    const className = previous ? "Left" : "Right";
    const event = previous ? "previous" : "next";
    return (
      <p
        className="Arrow"
        onClick={() => {
          context.didClickChangedPhoto(context, event);
        }}
      >
        <i className={className} />
      </p>
    );
  }

  configureImage(className: string, photoData: PhotoObject, onClickFunction?: any): JSX.Element {
    return <img className={className} src={"Img/" + photoData.name} alt="" onClick={onClickFunction} />;
  }

  didClickChangedPhoto(context: this, event: string) {
    context.changePhoto(context, event === "next" ? false : true);
  }

  componentDidMount() {
    const context = this;
    this.interval = setInterval(() => context.changePhoto(context), 5000);
  }

  changePhoto(context: this, previous?: boolean) {
    var index = context.state.indexCurentPhoto;
    index = previous ? index - 1 : index + 1;
    if (index >= context.images.length) {
      index = 0;
    } else if (index < 0) {
      index = context.images.length - 1;
    }
    context.setState({ indexCurentPhoto: index });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

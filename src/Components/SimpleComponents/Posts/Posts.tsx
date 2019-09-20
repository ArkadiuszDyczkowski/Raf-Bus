import * as React from "react";
import "./posts.css";

interface Props { }

interface State { }

export interface PostContent {
    title: string;
    fileName: string;
    desciption: string
}

interface ExtendedWindow extends Window {
    posts?: PostContent[];
}

export class Posts extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>{this.getPosts(window)}</div>
    }

    getPosts(windowSource: ExtendedWindow) {
        const dataSource = windowSource.posts;
        var list: JSX.Element[] = [];
        if (dataSource) {
            dataSource.forEach(post => {
                list.push(this.configureHtmlElement(post))
            });
        }
        return list;
    }

    configureHtmlElement(post: PostContent) {
        const src = "Img/" + post.fileName;
        return <div className="Tile">
            <p className="Title">{post.title}</p>
            <img
                className="Image"
                alt=""
                src={src}
                onClick={() => {
                    window.location.href = post.fileName;
                    window.location.reload();
                }}
            />
            <div className="Desciption Text">{post.desciption}</div>
        </div>
    }
}
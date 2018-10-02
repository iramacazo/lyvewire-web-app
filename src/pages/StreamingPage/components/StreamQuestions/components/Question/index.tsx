import * as React from "react";
import {Feed,  Icon} from "semantic-ui-react";

interface IPropsType {
    question: string;
    likes: number;
}

export default class Question extends React.Component<IPropsType> {
    public render(){
        return <Feed.Event>
                <Feed.Label icon="question" />
                <Feed.Content>
                    <Feed.Summary>{this.props.question}</Feed.Summary>
                    <Feed.Meta>
                        <Feed.Like>
                            <div>
                            <Icon name="like" />
                            <p className="liked">{this.props.likes} Likes</p>
                            </div>
                        </Feed.Like>
                    </Feed.Meta>
                </Feed.Content>
            </Feed.Event>;
    }
}
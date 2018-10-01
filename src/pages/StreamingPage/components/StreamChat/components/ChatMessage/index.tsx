import * as React from "react";
import { Feed, Image } from "semantic-ui-react";
import chatIcon from "../../../../../../assets/images/speaker2.jpg";

export default class ChatMessage extends React.Component {
    public render() {
        const image = <Image src={chatIcon} circular={true} size="mini" />;
        return (
            <Feed.Event>
                <Feed.Content>
                    <div className="chat-message-header">
                        <Feed.Label image={image} />
                        <div className="chat-message-details">
                            <Feed.Summary>
                                <a>Keith Tan</a>
                                <Feed.Date>2 seconds ago</Feed.Date>
                            </Feed.Summary>
                        </div>
                    </div>
                    <Feed.Extra>
                        Here's a long test message. Loren ipsum dolor est
                        something idk look I need professional mental help. If
                        you're reading this, save me.
                    </Feed.Extra>
                </Feed.Content>
            </Feed.Event>
        );
    }
}

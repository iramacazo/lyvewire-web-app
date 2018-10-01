import * as React from "react";
import { Feed } from "semantic-ui-react";

export default class ChatMessage extends React.Component {
    public render() {
        return (
            <Feed.Event>
                <Feed.Content>
                    <Feed.Summary>
                        <a>Keith Tan</a>
                    </Feed.Summary>
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

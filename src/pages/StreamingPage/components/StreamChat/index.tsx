import * as React from "react";
import { Feed, Input } from "semantic-ui-react";
import ChatMessage from "./components/ChatMessage";

interface IPropsType {
    expanded: boolean;
    toggleActive: any;
}

export default class StreamChat extends React.Component<IPropsType> {
    public render() {
        return (
            <div className="stream-chat" onClick={this.props.toggleActive}>
                {!this.props.expanded && (
                    <React.Fragment>
                        <h3>Chat</h3>
                    </React.Fragment>
                )}

                {this.props.expanded && (
                    <React.Fragment>
                        <h3>Chat</h3>
                        <Feed>
                            <ChatMessage />
                            <ChatMessage />
                            <ChatMessage />
                            <ChatMessage />
                            <ChatMessage />
                            <ChatMessage />
                            <ChatMessage />
                            <ChatMessage />
                        </Feed>
                        <div className="chat-input">
                            <Input placeholder="Type in chat..." />
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
}

import * as React from "react";
import { Menu } from "semantic-ui-react";

export default class MenuBar extends React.Component {
    public render() {
        return (
            <div className="menu-bar">
                <Menu
                    borderless={true}
                    className="navigation-content"
                    size="massive"
                    inverted={true}
                >
                    <Menu.Item className="menu-item">Lyvewire</Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item className="menu-item">Sign In</Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

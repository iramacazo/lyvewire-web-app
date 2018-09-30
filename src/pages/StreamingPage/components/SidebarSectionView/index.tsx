import classNames from "classnames";
import * as React from "react";

interface IPropsType {
    expanded: boolean;
    children: React.ReactNode;
}

export default class SidebarSectionView extends React.Component<IPropsType> {
    public render() {
        const { expanded, children } = this.props;
        return (
            <div
                className={classNames("sidebar-section", {
                    collapsed: !expanded,
                    expanded,
                })}
            >
                {children}
            </div>
        );
    }
}

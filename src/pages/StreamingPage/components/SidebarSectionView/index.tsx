import * as React from "react";

interface IPropsType {
    expanded: boolean;
    children: React.ReactNode;
}

export default class SidebarSectionView extends React.Component<IPropsType> {
    public render() {
        const { expanded, children } = this.props;
        const active = expanded ? "expanded" : "collapsed";
        return <div className={`sidebar-section ${active}`}>{children}</div>;
    }
}

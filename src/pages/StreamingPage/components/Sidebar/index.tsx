import { inject, observer } from "mobx-react";
import * as React from "react";
import SidebarSection from "../../../../entities/enums/sidebar_section";
import { StreamSidebar } from "../../../../store/stream_sidebar";
import SidebarSectionView from "../SidebarSectionView";
import StreamChat from "../StreamChat";
import StreamQuestion from "../StreamQuestions";
import "./styles.css";

interface IPropsType {
    streamSidebar?: StreamSidebar;
}

@inject("streamSidebar")
@observer
export default class Sidebar extends React.Component<IPropsType> {
    public render() {
        const { streamSidebar } = this.props;
        const { activeSection } = streamSidebar!;
        return (
            <div className="sidebar">
                <SidebarSectionView
                    expanded={activeSection === SidebarSection.Question}
                >
                    <StreamQuestion
                        expanded={activeSection === SidebarSection.Question}
                    />
                </SidebarSectionView>
                <SidebarSectionView
                    expanded={activeSection === SidebarSection.Chat}
                >
                    <StreamChat
                        expanded={activeSection === SidebarSection.Chat}
                    />
                </SidebarSectionView>
            </div>
        );
    }
}

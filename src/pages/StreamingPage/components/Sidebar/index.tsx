import { inject, observer } from "mobx-react";
import * as React from "react";
import SidebarSection from "../../../../entities/enums/sidebar_section";
import SidebarSectionView from "../SidebarSectionView";
import StreamChat from "../StreamChat";
import StreamQuestion from "../StreamQuestions";
import "./styles.css";

@inject("streamSidebar")
@observer
export default class Sidebar extends React.Component {
    public state = {
        activeSection: SidebarSection.Chat,
    };

    public toggleActiveSection = (section: SidebarSection) => {
        if (section !== this.state.activeSection) {
            this.setState({
                activeSection: section,
            });
        }
    };

    public render() {
        const toggleQuestionActive = () =>
            this.toggleActiveSection(SidebarSection.Question);
        const toggleChatActive = () =>
            this.toggleActiveSection(SidebarSection.Chat);
        return (
            <div className="sidebar">
                <SidebarSectionView
                    expanded={
                        this.state.activeSection === SidebarSection.Question
                    }
                >
                    <StreamQuestion
                        expanded={
                            this.state.activeSection === SidebarSection.Question
                        }
                        toggleActive={toggleQuestionActive}
                    />
                </SidebarSectionView>
                <SidebarSectionView
                    expanded={this.state.activeSection === SidebarSection.Chat}
                >
                    <StreamChat
                        expanded={
                            this.state.activeSection === SidebarSection.Chat
                        }
                        toggleActive={toggleChatActive}
                    />
                </SidebarSectionView>
            </div>
        );
    }
}

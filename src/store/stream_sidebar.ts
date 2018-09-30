import { observable } from "mobx";
import SidebarSection from "../entities/enums/sidebar_section";

export class StreamSidebar {
    @observable
    public activeSection: SidebarSection = SidebarSection.Chat;
}

export default new StreamSidebar();

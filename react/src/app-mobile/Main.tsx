import * as React from "react";
import { Sidebar } from "../components/Sidebar";
import MainContent from "./Main/MainContent";
import SidebarContent from "./Main/SidebarContent";
import {useSidebarToggleContext} from "../components/SidebarToggleContext";
import ISidebarProps from '../interfaces/ISidebarProps';

const sidebarContent = <SidebarContent style={{}}/>;

//const sidebarToggle = useSidebarToggleContext() as ISidebarToggle;

const Main: React.FunctionComponent = () => {
    const sidebarToggle = useSidebarToggleContext() as ISidebarProps;

    const sidebarProps: ISidebarProps = {
        docked: true, 
        open: sidebarToggle.open,//come from context
        toggle: sidebarToggle.toggle,//come from context
        width: 200,
        sidebarContent: sidebarContent
    };

    return (
        <Sidebar {...sidebarProps}>
            <MainContent title={"Content Header"} style={{}}>
                <div>
                    <p>
                        React Sidebar is a sidebar component for React. It offers several features.
                    </p>
                </div>
            </MainContent>
        </Sidebar>
    );
}

export default Main;

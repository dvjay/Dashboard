import * as React from "react";
import ISidebarProps from '../../interfaces/ISidebarProps';

const defaultStyles = {
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden"
  },
  sidebar: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    bottom: 0,
    transition: "transform .3s ease-out",
    WebkitTransition: "-webkit-transform .3s ease-out",
    willChange: "transform",
    overflowY: "auto"
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "auto",
    transition: "left .3s ease-out, right .3s ease-out"
  },
  overlay: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .3s ease-out, visibility .3s ease-out",
    backgroundColor: "rgba(0,0,0,.3)"
  }
};

class Sidebar extends React.Component<ISidebarProps, {}> {
  static defaultProps: ISidebarProps = {
    docked: false,
    open: false,
    toggle: () => {},
    width: 0,
    sidebarContent: null
  };

  overlayClicked = () => {
    if (this.props.open) {
      this.props.toggle();
    }
  }

  render() {
    const sidebarStyle: any = {
      ...defaultStyles.sidebar
    };
    const contentStyle: any = {
      ...defaultStyles.content
    };
    const overlayStyle: any = {
      ...defaultStyles.overlay
    };
 
    const rootProps: any = {
      style: { ...defaultStyles.root }
    };
    
    sidebarStyle.left = 0;
    sidebarStyle.width = `${this.props.width}px`;
    sidebarStyle.transform = "translateX(-100%)";
    sidebarStyle.WebkitTransform = "translateX(-100%)";

    if (this.props.docked || this.props.open) {
      sidebarStyle.transform = `translateX(0%)`;
      sidebarStyle.WebkitTransform = `translateX(0%)`;
    }

    if (this.props.docked) {
      contentStyle.left = `${this.props.width}px`;
    } else if (this.props.open) {
      // show overlay
      overlayStyle.opacity = 1;
      overlayStyle.visibility = "visible";
    }

    

    return (
      <nav {...rootProps}>
        <div
          style={sidebarStyle}
        >
          {this.props.sidebarContent}
        </div>
        {/* eslint-disable */}
        <div
          style={overlayStyle}
          onClick={this.overlayClicked}
        />
        {/* eslint-enable */}
        <div
          style={contentStyle}
        >
          {this.props.children}
        </div>
      </nav>
    );
  }
}


export {ISidebarProps, Sidebar};




/*import * as React from "react";
import styled, {AnyStyledComponent} from 'styled-components';

interface ISidebarProps {
  docked: boolean;
  open: boolean;
  toggle: () => void;
  width: number;
  sidebarContent: JSX.Element;
}

const RootNav: AnyStyledComponent = styled.nav`
      position: "absolute";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: "hidden";
    `;

const OverlayDiv: AnyStyledComponent = styled.div<ISidebarProps>`
      z-index: 1;
      position: "fixed";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: ${ props => props.open ? 1 : 0};
      visibility: ${ props => props.open ? "hidden" : 0};
      transition: "opacity .3s ease-out, visibility .3s ease-out";
      background-color: "rgba(0,0,0,.3)";
    `;

const ContentDiv: AnyStyledComponent = styled.div<ISidebarProps>`
      position: "absolute";
      top: 0;
      left: ${ props => props.docked ? props.width + "px" : 0};
      right: 0;
      bottom: 0;
      overflow-y: "auto";
      transition: "left .3s ease-out, right .3s ease-out";
    `;
const SidebarDiv: AnyStyledComponent = styled.div<ISidebarProps>`
      z-index: 2;
      position: "absolute";
      top: 0;
      left: 0;
      width: ${ props => props.width + "px"};
      bottom: 0;
      transition: "transform .3s ease-out";
      transform: ${ props => props.docked || props.open ? `translateX(0%)` : `translateX(-100%)`};
      will-change: "transform";
      overflow-y: "auto";
    `;

class Sidebar extends React.Component<ISidebarProps, {}> {
  //sidebar: React.RefObject<AnyStyledComponent> = React.createRef<AnyStyledComponent>();

  static defaultProps: ISidebarProps = {
    docked: false,
    open: false,
    toggle: () => {},
    width: 0,
    sidebarContent: <span>{"Default Sidebar Content!"}</span>
  };
  
  overlayClicked = () => {
    if (this.props.open)
      this.props.toggle();
  };

  render () {
    return (
      <RootNav>
        <SidebarDiv sideBar={this.props}>
          {this.props.sidebarContent}
        </SidebarDiv>
        <OverlayDiv onClick={this.overlayClicked} sideBar={this.props}/>
        <ContentDiv sideBar={this.props}>
          {this.props.children}
        </ContentDiv>
      </RootNav>
    );
  }
}

export {ISidebarProps, Sidebar};*/
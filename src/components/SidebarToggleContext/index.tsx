import React, { createContext, ReactNode } from 'react';
import ISidebarToggle from '../../interfaces/ISidebarToggle';
import {AnyStyledComponent} from 'styled-components';
import { TweenMax } from 'gsap';
import { sideNavCloseGTC_Mobile, sideNavOpenGTC_Mobile } from 'src/global-styled/app';

const { Provider, Consumer } = createContext<ISidebarToggle>({isExpanded: false, 
                                                                setIsExpanded: () => {console.log("SidebarToggleHandler default value")},
                                                                toggle: () => {console.log("SidebarToggleHandler default value")}});

interface ISidebarInfoProps {
  appSectionRef: React.RefObject<AnyStyledComponent>;
  children: ReactNode
} 

interface ISidebarInfoState {
  expanded: boolean
}

class SidebarToggleProvider extends React.Component<ISidebarInfoProps, ISidebarInfoState> {
  constructor(props: ISidebarInfoProps) {
    super(props);

    this.state = {
      expanded: true
    };
  }

  sidebarToggle = (toggle: boolean, appSectionElem: React.RefObject<AnyStyledComponent>) => {
    TweenMax.to(appSectionElem.current as any,
      .2, {
      gridTemplateColumns: toggle?  sideNavOpenGTC_Mobile : sideNavCloseGTC_Mobile
      }
    );
  }

  handleToggle = () => {
    this.sidebarToggle(this.state.expanded, this.props.appSectionRef);
  };

  setIsExpanded = (isExpanded: boolean) => {
    if(typeof isExpanded === 'boolean') {
      this.setState({ expanded: isExpanded });
    }
  }

  render() {
    return (
      <Provider
        value={{
          isExpanded: this.state.expanded,
          setIsExpanded: this.setIsExpanded,
          toggle: this.handleToggle
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export {SidebarToggleProvider, Consumer as SidebarToggleConsumer};
import React, { createContext, ReactNode, useContext } from 'react';
import ISidebarProps from '../../interfaces/ISidebarProps';

const initValueSidePropsMobile: ISidebarProps = {
  docked: false,
  width: 0,
  open: false,
  toggle: () => {console.log("SidebarToggleHandler default value")}
}
interface ISidebarInfoProps {
  children: ReactNode
} 
interface ISidebarInfoState {
  open: boolean
}

const SidebarToggleContext = createContext<ISidebarProps>({docked: false, width: 0, open: true, toggle: () => {console.log("SidebarToggleHandler default value")}});

class SidebarToggleProvider extends React.Component<ISidebarInfoProps, ISidebarInfoState> {
  constructor(props: ISidebarInfoProps) {
    super(props);

    this.state = {
      open: true,

    };
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open }, () => { console.log("handle toggle for: " + this.state.open)});
  }

  setIsExpanded = (isExpanded: boolean) => {
    if(typeof isExpanded === 'boolean') {
      this.setState({ open: isExpanded });
    }
  }

  render() {
    return (
      <SidebarToggleContext.Provider value={{ open: this.state.open, toggle: this.handleToggle}}>
        {this.props.children}
      </SidebarToggleContext.Provider>
    );
  }
}

const SidebarToggleConsumer = SidebarToggleContext.Consumer;
const useSidebarToggleContext = () => {
  return useContext(SidebarToggleContext);
}

export {SidebarToggleProvider, SidebarToggleConsumer, useSidebarToggleContext};
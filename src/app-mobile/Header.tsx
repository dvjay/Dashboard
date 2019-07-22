import * as React from 'react';
import styled from 'styled-components';
import ToggleMenu from './Header/ToggleMenu';
import { TransitionGroup } from 'react-transition-group';
import {SidebarToggleConsumer} from '../components/SidebarToggleContext';

// export interface IHeaderProps {
//   appSectionElem: React.RefObject<AnyStyledComponent>;
// }
// export interface IHeaderState {
//   menuOpen: boolean;
// }

export class Header extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }
  
  render() {
    const HeaderUl = styled.ul`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      background: deepskyblue;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    `;
    
    return(
      <HeaderUl>
        <li>
          <SidebarToggleConsumer>
            {context =>
              <TransitionGroup component={null} >
                <ToggleMenu sideBarContext={context}/>
              </TransitionGroup>
            } 
          </SidebarToggleConsumer>
        </li>
        <li>
          <div>Logo</div>
        </li>
      </HeaderUl>
    )
  }
}
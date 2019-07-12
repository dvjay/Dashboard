import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Header } from './app/Header';
import {sideNavOpenGTC, sideNavCloseGTC, AppSection, AppHeader, AppTabs, AppMain, AppSideNav, AppFooter} from './global-styled/app';
import './style.css';
import { TweenMax } from 'gsap';
import {AnyStyledComponent} from 'styled-components';
import { initializeIcons } from '@uifabric/icons';
//import { loadTheme } from 'office-ui-fabric-react';
initializeIcons();


const App = () => {
	const appSectionElem: React.RefObject<AnyStyledComponent> = React.createRef<AnyStyledComponent>();

	return (<AppSection ref={appSectionElem}>
				<AppHeader>
					<Header appSectionElem={appSectionElem}/>
				</AppHeader>
				<AppTabs>Tabs</AppTabs>
				<AppMain>Editor</AppMain>
				<AppSideNav>
					<div>
						I am a floated element.
					</div>
				</AppSideNav>
				<AppFooter>Footer</AppFooter>
  			</AppSection>);
};
	

export default hot(module)(App);
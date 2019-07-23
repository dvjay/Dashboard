import * as React from 'react';
import { hot } from 'react-hot-loader';
import {sideNavCloseGTC_Mobile, sideNavCloseGTC_Desktop, sideNavOpenGTA} from './global-styled/app';
import './style.css';
import styled, {AnyStyledComponent} from 'styled-components';
import { initializeIcons } from '@uifabric/icons';
import SelectLayout from './components/SelectLayout';
import AppMobile from './app-mobile';
import AppDesktop from './app-desktop';
import {DeviceViewTypeProvider, DeviceViewTypeConsumer} from './components/DeviceViewTypeContext';
import {SidebarToggleProvider} from './components/SidebarToggleContext';
import { DeviceViews, IResponsiveInfo} from './interfaces/IResponsiveSize';
initializeIcons();

const App = () => {
	const appSectionElem: React.RefObject<AnyStyledComponent> = React.createRef<AnyStyledComponent>();

	const AppSection: AnyStyledComponent = styled.section<IResponsiveInfo>`
		display: grid;
		grid-template-rows: 100px auto 100px;
		grid-template-columns: ${ props => props.startupSize.deviceView === DeviceViews.Mobile ? sideNavCloseGTC_Mobile : sideNavCloseGTC_Desktop};
		grid-template-areas: ${sideNavOpenGTA};
		height: 100vh;
		width: 100vw;
		will-change: grid-template-columns, grid-template-rows;
		overflow: hidden;
	`;

	return (
		<DeviceViewTypeProvider>
			<DeviceViewTypeConsumer>
			{(context) => (
				<AppSection ref={appSectionElem} startupSize={context.startupSize}>
					<SidebarToggleProvider appSectionRef={appSectionElem} >
						<SelectLayout
							renderDesktop={() => (
								<AppDesktop />
							)}
							renderMobile={() => (
								<AppMobile/>
							)}
							/>
					</SidebarToggleProvider>
				</AppSection>)}
			</DeviceViewTypeConsumer>
		</DeviceViewTypeProvider>
	)
};

export default hot(module)(App);
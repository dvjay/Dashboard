import * as React from 'react';
import { hot } from 'react-hot-loader';
// import {sideNavCloseGTR_Mobile, sideNavCloseGTR_Desktop, sideNavOpenGTA} from './global-styled/app';
import './style.css';
import styled, {AnyStyledComponent} from 'styled-components';
import { initializeIcons } from '@uifabric/icons';
import SelectLayout from './components/SelectLayout';
import AppMobile from './app-mobile';
//import AppDesktop from './app-desktop';
import {DeviceViewTypeProvider, DeviceViewTypeConsumer} from './components/DeviceViewTypeContext';
// import {SidebarToggleProvider} from './components/SidebarToggleContext';
import { DeviceViews, IResponsiveInfo} from './interfaces/IResponsiveSize';
initializeIcons();

const sideNavOpenGTA = `"header"
						"main"
						"footer"`;
const sideNavOpenGTR_Desktop = "100px auto 100px";
const sideNavOpenGTR_Mobile = "100px auto 100px";

const AppSection: AnyStyledComponent = styled.section<IResponsiveInfo>`
		display: grid;
		/* grid-template-rows: 100px auto 100px; */
		grid-template-rows: ${ props => props.startupSize.deviceView === DeviceViews.Mobile ? sideNavOpenGTR_Mobile : sideNavOpenGTR_Desktop};
		grid-template-areas: ${sideNavOpenGTA};
		height: 100vh;
		width: 100vw;
		will-change: grid-template-columns, grid-template-rows;
		overflow: hidden;
	`;

const App = () => {
	//const appSectionElem: React.RefObject<AnyStyledComponent> = React.createRef<AnyStyledComponent>();

	return (
		<DeviceViewTypeProvider>
			<DeviceViewTypeConsumer>
			{(context) => (
				<AppSection startupSize={context.startupSize}>
						<SelectLayout renderDesktop={() => (
										<AppMobile />
									)}
									renderMobile={() => (
										<AppMobile/>
									)}/>
				</AppSection>)}
			</DeviceViewTypeConsumer>
		</DeviceViewTypeProvider>
	)
};

export default hot(module)(App);
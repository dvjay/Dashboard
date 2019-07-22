import * as React from 'react';
import { hot } from 'react-hot-loader';
import {AppSection} from './global-styled/app';
import './style.css';
import {AnyStyledComponent} from 'styled-components';
import { initializeIcons } from '@uifabric/icons';
import SelectLayout from './components/SelectLayout';
import AppMobile from './app-mobile';
import AppDesktop from './app-desktop';
import {DeviceViewTypeProvider} from './components/DeviceViewTypeContext';
import {SidebarToggleProvider} from './components/SidebarToggleContext';
initializeIcons();

const App = () => {
	const appSectionElem: React.RefObject<AnyStyledComponent> = React.createRef<AnyStyledComponent>();

	return (
		<DeviceViewTypeProvider>
			<AppSection ref={appSectionElem}>
				<SidebarToggleProvider appSectionRef={appSectionElem}>
					<SelectLayout
						renderDesktop={() => (
							<AppDesktop />
						)}
						renderMobile={() => (
							<AppMobile/>
						)}
						/>
				</SidebarToggleProvider>
			</AppSection>
		</DeviceViewTypeProvider>
	)
};

export default hot(module)(App);
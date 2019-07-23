import * as React from 'react';
import { Header } from './Header';
import { AppMobHeader, AppMobMain, AppMobSideNav, AppMobFooter } from '../global-styled/app';

const AppDesktop = () => {
	return (<>
		<AppMobHeader>
			<Header/>
		</AppMobHeader>
		<AppMobMain>Editor</AppMobMain>
		<AppMobSideNav>
			<div>
				I am a floated element in Desktop.
			</div>
		</AppMobSideNav>
		<AppMobFooter>Footer</AppMobFooter>
	  </>);
};
	

export default AppDesktop;
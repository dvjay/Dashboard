import * as React from 'react';
import { Header } from './Header';
import {AppHeader, AppMain, AppSideNav, AppFooter} from '../global-styled/app';


const AppMobile = () => {
	return (<>
				<AppHeader>
					<Header/>
				</AppHeader>
				<AppMain>Editor</AppMain>
				<AppSideNav>
					<div>
						I am a floated element in Mobile.
					</div>
				</AppSideNav>
				<AppFooter>Footer</AppFooter>
  			</>);
};
	

export default AppMobile;
import React, {useRef} from 'react';
import { hot } from 'react-hot-loader';
import { MainHeader } from './components/MainHeader/MainHeader'
import './style.css';
import styled from 'styled-components';
import { initializeIcons } from '@uifabric/icons';
//import { loadTheme } from 'office-ui-fabric-react';
initializeIcons();


const AppSection = styled.section`
	display: grid;
	grid-template-rows: 70px 70px auto 70px;
	grid-template-columns: repeat(4, 1fr);
	grid-template-areas: 	"header header header header"
							"tabs tabs tabs tabs"
							"main main main main"
							"footer footer footer footer";
	height: 100vh;
	width: 100vw;
	will-change: grid-template-columns, grid-template-rows;
	overflow: hidden;
`;

const AppHeader = styled.header`
	grid-area: header;
`;

const AppSideNav = styled.nav`
	grid-area: 2 /1 / span 2/ span 3;
	background-color: green;
	width: 100%;
	height: 100%;
	min-width: 200px;
	place-self: flex-end;
`;

const AppTabs = styled.section`
	grid-area: tabs;
	background-color: orange;
`;

const AppMain = styled.main`
	grid-area: main;
	background-color: blue;
`;

const AppFooter = styled.footer`
	grid-area: footer;
	background-color: gray;
`;

const App = () => {

	return (<AppSection>
				<AppHeader>
					<MainHeader/>
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
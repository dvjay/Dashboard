import styled, {AnyStyledComponent} from 'styled-components';

export const sideNavOpenGTA = `"header header header header"
						"tabs tabs tabs tabs"
						"main main main main"
                        "footer footer footer footer"`;	
                        
export const sideNavOpenGTC = "1fr 1fr 1fr 1fr";

export const sideNavCloseGTC = "0fr 0fr 0fr 4fr";

export const AppSection: AnyStyledComponent = styled.section`
	display: grid;
	grid-template-rows: 100px 100px auto 100px;
	grid-template-columns: ${sideNavCloseGTC};
	grid-template-areas: ${sideNavOpenGTA};
	height: 100vh;
	width: 100vw;
	will-change: grid-template-columns, grid-template-rows;
	overflow: hidden;
`;

export const AppHeader = styled.header`
	grid-area: header;
`;

export const AppSideNav = styled.nav`
	grid-area: 2 /1 / span 2/ span 3;
	background-color: green;
	width: 100%;
	height: 100%;
	min-width: 200px;
	place-self: flex-end;
`;

export const AppTabs = styled.section`
	grid-area: tabs;
	background-color: orange;
`;

export const AppMain = styled.main`
	grid-area: main;
	background-color: blue;
`;

export const AppFooter = styled.footer`
	grid-area: footer;
	background-color: gray;
`;
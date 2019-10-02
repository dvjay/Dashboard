import * as React from "react";
import MainContent from "./MainContent";

const styles = {
  sidebar: {
    width: "100%",
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};

interface ISidebarContentProps {
    style: object;
}

const SidebarContent: React.FunctionComponent<ISidebarContentProps> = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  return (
    <MainContent title="Menu" style={style}>
      <div style={styles.content}>
        <a href="#" style={styles.sidebarLink}>
          Home
        </a>
        <a href="#" style={styles.sidebarLink}>
          Responsive Example
        </a>
      </div>
    </MainContent>
  );
};

export default SidebarContent;
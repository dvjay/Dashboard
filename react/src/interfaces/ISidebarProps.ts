export default interface ISidebarProps {
    docked: boolean;
    open: boolean;
    toggle: () => void;
    width: number;
    sidebarContent?: JSX.Element | null;
  }
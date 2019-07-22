export default interface ISidebarToggle {
    isExpanded: boolean;
    setIsExpanded: (isExpanded: boolean) => void;
    toggle: () => void;
}
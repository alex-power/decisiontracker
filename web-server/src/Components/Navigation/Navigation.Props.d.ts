export interface INavigationItem {
    /**
     * Optional icon render method
     * Should return an @material-ui/icon
     */
    onRenderIcon?: () => JSX.Element;

    /**
     * Text to display
     */
    primaryText: string;

    /**
     * Optional kicker text to display
     */
    secondaryText?: string;
}

export interface INavigationGroup {
    /**
     * Items to display within this group
     */
    items: INavigationItem[];
}

export interface INavigationProps {
    /**
     * Navigation groups to display in the left vertical nav
     */
    navigationGroups: INavigationGroup[];

    /**
     * Optional handler for navigation item clicks
     */
    onNavigationItemClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;

    /**
     * Optional currently selected navigation item
     */
    selectedIndex?: number;
}
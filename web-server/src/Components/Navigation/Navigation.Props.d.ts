import { WithStyles } from "@material-ui/core";
import { styles } from ".";

export interface INavigationItem {
    /**
     * Optional icon render method
     * Should return an @material-ui/icon
     */
    onRenderIcon?: () => JSX.Element;

    /**
     * Optional onClick handler for this item
     */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;

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

export interface INavigationProps extends WithStyles<typeof styles> {
    /**
     * Navigation groups to display in the left vertical nav
     */
    navigationGroups: INavigationGroup[];
}
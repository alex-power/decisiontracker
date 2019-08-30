import * as React from "react";
import { INavigationProps } from "./Navigation.Props";

import { Drawer, List, ListItem, ListItemText, Divider, ListItemAvatar, withStyles } from "@material-ui/core";
import { Theme, createStyles } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
    createStyles({
        drawer: {
            width: 240,
            flexShrink: 0
        }
    });

class NavigationComponent extends React.Component<INavigationProps> {
    public render() {
        const { classes, navigationGroups } = this.props;

        return (
            <Drawer anchor="left" className={classes.drawer} variant="permanent">
                <Divider key="divider-base" />

                {navigationGroups.map((group, index) => (
                    <React.Fragment key={`list-${index}`}>
                        <List>
                            {group.items.map((item, index) => (
                                <ListItem button key={item.primaryText} onClick={event => item.onClick && item.onClick(event)}>
                                    {item.onRenderIcon && <ListItemAvatar>{item.onRenderIcon()}</ListItemAvatar>}
                                    <ListItemText primary={item.primaryText} secondary={item.secondaryText} />
                                </ListItem>
                            ))}
                        </List>
                        {index !== navigationGroups.length - 1 && <Divider key={`divider-${index}`} />}
                    </React.Fragment>
                ))}
            </Drawer>
        );
    }
}

export const Navigation = withStyles(styles)(NavigationComponent);

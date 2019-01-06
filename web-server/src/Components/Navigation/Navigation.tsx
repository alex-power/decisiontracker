import * as React from "react";
import { INavigationProps } from "./Navigation.Props";

import { Drawer, List, ListItem, ListItemText, Divider, ListItemAvatar } from "@material-ui/core";

export class Navigation extends React.Component<INavigationProps> {
    public render() {
        const { navigationGroups, onNavigationItemClick, selectedIndex } = this.props;

        return (
            <Drawer variant="permanent" anchor="left">
                <Divider />

                {navigationGroups.map((group, index) => (
                    <>
                        <List key={index}>
                            {group.items.map((item, index) => (
                                <ListItem
                                    selected={index == selectedIndex}
                                    button
                                    key={item.primaryText}
                                    onClick={event => onNavigationItemClick(event, index)}
                                >
                                    {item.onRenderIcon && <ListItemAvatar>{item.onRenderIcon()}</ListItemAvatar>}
                                    <ListItemText primary={item.primaryText} secondary={item.secondaryText} />
                                </ListItem>
                            ))}
                        </List>
                        {index !== navigationGroups.length - 1 && <Divider />}
                    </>
                ))}
            </Drawer>
        );
    }

    private onListItemClick = (index: number) => {
        this.setState({
            selectedIndex: index
        });
    };
}

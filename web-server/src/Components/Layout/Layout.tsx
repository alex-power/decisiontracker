import * as React from "react";
import { ILayoutProps } from "./Layout.Props";

import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";

interface ILayoutState {
    selectedIndex: number;
}

export class Layout extends React.Component<ILayoutProps, ILayoutState> {
    constructor(props: ILayoutProps) {
        super(props);

        this.state = {
            selectedIndex: 0
        };
    }

    public render() {
        const { selectedIndex } = this.state;

        return (
            <Drawer variant="permanent" anchor="left">
                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem selected={index == selectedIndex} button key={text} onClick={() => this.onListItemClick(index)}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} secondary={index} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        );
    }

    private onListItemClick = (index: number) => {
        this.setState({
            selectedIndex: index
        });
    };
}

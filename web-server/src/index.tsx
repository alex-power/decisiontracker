import * as React from "react";
import * as ReactDOM from "react-dom";
import { Navigation, INavigationGroup } from "Components/Navigation";
import { Badge } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import Alarm from "@material-ui/icons/Alarm";
import { Users } from "PageContent/Admin/Users";

const navigationGroups: INavigationGroup[] = [
    {
        items: [
            { primaryText: "Inbox", secondaryText: "Kicker text goes here!", onRenderIcon: () => <InboxIcon /> },
            {
                primaryText: "Notifications",
                onRenderIcon: () => (
                    <Badge color="secondary" badgeContent={2}>
                        <Alarm />
                    </Badge>
                )
            }
        ]
    },
    { items: [{ primaryText: "New group test" }] }
];

ReactDOM.render(
    <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigation navigationGroups={navigationGroups} onNavigationItemClick={(event, index) => console.log(`Clicked on ${index}`)} />
        <main style={{ flexGrow: 1 }}>
            <Users />
        </main>
    </div>,
    document.getElementById("react-root")
);

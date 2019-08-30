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
            { primaryText: "Inbox", secondaryText: "Kicker text goes here!", onRenderIcon: () => <InboxIcon />, onClick: () => console.log("Navigate to Inbox") },
            {
                primaryText: "Notifications",
                onRenderIcon: () => (
                    <Badge color="secondary" badgeContent={2}>
                        <Alarm />
                    </Badge>
                ),
                onClick: () => console.log("Navigate to Notifications")
            }
        ]
    },
    { items: [{ primaryText: "New group test" }, {primaryText: "Fuckin dab on em"}] }
];

ReactDOM.render(
    <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigation navigationGroups={navigationGroups} />
        <main style={{ flexGrow: 1 }}>
            <Users />
        </main>
    </div>,
    document.getElementById("react-root")
);

import * as React from "react";
import { IUserDataProvider, User, UserDataProviderName } from "Frame/DataProviders/User";
import { Paper, TableCell, TableBody, CircularProgress } from "@material-ui/core";
import { Table, TableHead, TableRow } from "@material-ui/core";
import { Page } from "Frame/Page";

interface UsersState {
    currentUsers?: User[];
}

export class Users extends React.Component<{}, UsersState> {
    private dataProvider: IUserDataProvider;

    constructor(props: {}) {
        super(props);
        this.state = {};
    }

    public render() {
        const { currentUsers } = this.state;

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{currentUsers && currentUsers.map(this.makeRow)}</TableBody>
                </Table>
            </Paper>
        );
    }

    public componentDidMount() {
        this.dataProvider = Page.getDataProvider<User>(UserDataProviderName);
        this.dataProvider.fetch().then((users: User[]) => {
            this.setState({ currentUsers: users });
        });
    }

    private makeRow = (user: User) => {
        return (
            <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
            </TableRow>
        );
    };
}

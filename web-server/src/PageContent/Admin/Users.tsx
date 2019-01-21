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
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{currentUsers ? currentUsers.map(this.makeRow) : this.makeLoadingRow()}</TableBody>
                </Table>
            </Paper>
        );
    }

    public componentDidMount() {
        this.dataProvider = Page.getDataProvider<User>(UserDataProviderName);
        this.dataProvider.fetch().then((users: User[]) => {
            setTimeout(() => {
                this.setState({ currentUsers: users });
            }, 3000);
        });
    }

    private makeLoadingRow = () => {
        return (
            <TableRow key="loading">
                <TableCell align="center" colSpan={2}>
                    <CircularProgress />
                </TableCell>
            </TableRow>
        );
    };

    private makeRow = (user: User) => {
        return (
            <TableRow key={user.id}>
                <TableCell component="th" scope="row">
                    {user.name}
                </TableCell>
                <TableCell align="right">{user.email}</TableCell>
            </TableRow>
        );
    };
}

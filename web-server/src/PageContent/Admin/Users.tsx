import * as React from "react";
import { IUserDataProvider, User, UserDataProviderName } from "Frame/DataProviders/User";
import { Paper, TableCell, TableBody, CircularProgress } from "@material-ui/core";
import { Table, TableHead, TableRow } from "@material-ui/core";
import { PageContext } from "Frame/Page";
import { IHistoryService, HistoryServiceName, IHistoryState } from "Frame/Service/HistoryService/HistoryService";

interface UsersState {
    currentUsers?: User[];
    error: boolean;
}

export class Users extends React.Component<{}, UsersState> {
    private dataProvider: IUserDataProvider;

    constructor(props: {}) {
        super(props);
        this.state = {
            error: false
        };
    }

    public render() {
        const { currentUsers, error } = this.state;

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{this.renderTableBody(currentUsers)}</TableBody>
                </Table>
            </Paper>
        );
    }

    public componentDidMount() {
        this.dataProvider = PageContext.getDataProvider<User>(UserDataProviderName);
        this.dataProvider
            .fetch()
            .then((users: User[]) => {
                setTimeout(() => {
                    this.setState({ currentUsers: users });
                }, 3000);
            })
            .catch(() => {
                this.setState({ error: true });
            });
    }

    private makeErrorRow = () => {
        return this.makeSpanningRow(<>There was an error retrieving data to display</>);
    };

    private makeLoadingRow = () => {
        return this.makeSpanningRow(<CircularProgress />);
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

    private makeSpanningRow = (children: JSX.Element) => {
        return (
            <TableRow key="loading">
                <TableCell align="center" colSpan={2}>
                    {children}
                </TableCell>
            </TableRow>
        );
    };

    private makeZeroDataRow = () => {
        return this.makeSpanningRow(<>There is nothing to display currently</>);
    };

    private renderTableBody(users: User[] | undefined): JSX.Element {
        if (this.state.error) {
            return this.makeErrorRow();
        }
        if (users) {
            if (users.length === 0) {
                return this.makeZeroDataRow();
            } else {
                return <> {users.map(this.makeRow)} </>;
            }
        } else {
            return this.makeLoadingRow();
        }
    }
}

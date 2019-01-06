import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

export class Test extends React.Component<{}> {
    public render() {
        return (
            <Button variant="contained" color="primary" onClick={() => alert("CLICKY BOI")}>
                Please click me
            </Button>
        );
    }
}

ReactDOM.render(<Test />, document.getElementById("react-root"));

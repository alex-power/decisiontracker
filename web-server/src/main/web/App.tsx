import * as React from "react";
import * as ReactDOM from "react-dom";
import { Input } from "./components/Input";

interface IAppState {
	inputValue: string;
}

class App extends React.Component<{}, IAppState> {
	constructor(props: {}) {
		super(props);

		this.state = {
			inputValue: ""
		};
	}

	public render() {
		const { inputValue } = this.state;

		return (
			<Input
				className="test-class"
				value={inputValue}
				onValueChange={this.onInputChanged}
			/>
		);
	}

	private onInputChanged = (newValue: string) => {
		this.setState({ inputValue: newValue });
	};
}

ReactDOM.render(<App />, document.getElementById("react"));

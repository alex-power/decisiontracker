import * as React from "react";
import { IInputProps } from "./Input.Props";
import { css } from "../../util/Util";

export const Input: React.SFC<IInputProps> = props => {
	const { className, onValueChange, value } = props;

	return (
		<input
			type="text"
			className={css("decide-input", className)}
			value={value}
			onChange={event => {
				onValueChange && onValueChange(event.currentTarget.value);
			}}
		/>
	);
};

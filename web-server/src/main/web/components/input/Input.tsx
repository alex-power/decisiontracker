import * as React from "react";
import { IInputProps } from "./Input.Props";
import { css } from "../../util/Util";

/**
 * Standard text input
 * 100% controlled; value must be set and onValueChange must handle updates
 */
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

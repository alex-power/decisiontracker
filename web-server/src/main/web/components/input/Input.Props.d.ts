export interface IInputProps {
    /**
     * Optional custom classname - will be emitted last
     */
    className?: string;
    
    /**
     * Handler for when input value changes
     */
    onValueChange?: (newValue: string) => void;
    
    /**
     * Current input value
     */
	value?: string;
}

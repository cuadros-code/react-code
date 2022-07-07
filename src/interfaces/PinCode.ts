
export interface IPinCodeProps {

  className       ?: string;

  /**
   * Style of each input
  */
  inputStyle      ?: React.CSSProperties;

  /**
   * Number of inputs
  */
  length           : number;
  
  /**
   * Function to call when the input is changed
  */
  onChange         : React.Dispatch<React.SetStateAction<string>>
  
  placeholder     ?: string;

  /**
   * Value to compare with the input value
  */
  valueToValidate ?: string;

  /**
   * Border color of the input when the input is invalid
  */
  invalidBorderColor?: string;

  /**
   * Border color of the input when the input is valid
   */
  validBorderColor?: string;

  autoFocus?: boolean;
}
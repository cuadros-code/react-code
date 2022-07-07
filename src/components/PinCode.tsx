import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { IPinCodeProps } from '../interfaces/PinCode';
import '../styles/InputValidator.css'

export const PinCode: FC<IPinCodeProps> = ({ 
  length, 
  onChange, 
  placeholder, 
  inputStyle, 
  className,
  valueToValidate,
  invalidBorderColor = '#ff0000',
  validBorderColor = '#00ff00',
  autoFocus = false
}) => {

  const inputRef = useRef<HTMLInputElement[]>([]);
  const [inputValues, setInputValues] = useState([''])

  useEffect(() => {
    onChange(inputValues.join(''))
  }, [inputValues])
  
  useEffect(() => {
    setInputValues(Array(length).fill(''))
  }, [length])
  

  const focusHandler = ( inputIndex : number, step : 'next' | 'previous' ) => {
    const nextIndex = step === 'next' ? inputIndex + 1 : inputIndex - 1;
    const nextInput = inputRef.current[nextIndex];
    step === 'next' 
      ? ( inputIndex < length - 1 ) && nextInput.focus()
      : ( inputIndex > 0 )          && nextInput.focus();
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, currentIndex: number ) => {
    switch (e.key) {
      case 'ArrowRight':
        focusHandler(currentIndex, 'next');
        break;
      case 'ArrowLeft':
        focusHandler(currentIndex, 'previous');
        break;
      case 'Backspace':
        inputValues[currentIndex] === '' && focusHandler(currentIndex, 'previous');
        const deleteValueByIndex = inputValues.map((_, i) => i === currentIndex ? '' : inputValues[i])
        setInputValues( deleteValueByIndex);
        break;
    }
  }

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement>, currentIndex: number ) => {
    const { value } = e.target;
    if(!value) return;

    const updatedValueByIndex = inputValues.map((_, indexValues) => 
      indexValues === currentIndex 
      ? value 
      : inputValues[indexValues]
    )
    setInputValues(updatedValueByIndex)
    focusHandler(currentIndex, 'next');
  }

  const style = useMemo(
    () => {
      if(length !== inputValues.join('').length) return inputStyle
      
      if(valueToValidate === inputValues.join('')) {
        return { ...inputStyle, border: `2px solid ${validBorderColor}` }
      }

      return { ...inputStyle, border: `2px solid ${invalidBorderColor}` }
    },[length, inputValues])
  
  return (
    <>
      {
        inputValues.map(( value, index) => ( 
          <input 
            placeholder={placeholder}
            style={valueToValidate ? style : inputStyle}
            type="text"
            key={index}
            autoFocus={autoFocus ? index === 0 : false}
            className={`input_item ${className}`}
            maxLength={1}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
            onChange={(e) => handleChange(e, index)}
            ref={(el) => ( ( inputRef.current[index] as unknown ) = el )}
            value={value}
          />
        ))
      }
    </>
  )
}
export default PinCode
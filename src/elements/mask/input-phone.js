import InputMask from 'react-input-mask';

function PhoneInput(props) {
  return (
    <InputMask 
      mask='(+7) 999 999 9999' 
      value={props.value} 
      onChange={props.onChange}
      alwaysShowMask
      >
    </InputMask>
  );
}

export default PhoneInput;
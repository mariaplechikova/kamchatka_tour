import { useState } from 'react';
import InputMask from 'react-input-mask';

function PhoneInput(props) {
  return (
    <InputMask 
      mask='(+7) 999 999 9999' 
      value={props.value} 
      onChange={props.onChange}>
    </InputMask>
  );
}

// function PhoneInput() {
  
  // return (
    // <div>
      {/* <PhoneNumber  */}
        // value={phone} 
        // onChange={handleInput}>
      {/* </PhoneNumber> */}
      {/* <div style={{paddingTop: '12px'}}>Phone: {phone}</div> */}
    // </div>
  // );
// }
export default PhoneInput;
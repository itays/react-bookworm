import * as React from 'react';
interface Props {
  text: any;
}
const InlineError = ({text}: Props) => {
  return (
    <span style={{color: '#ae5856'}}>
      {text}
    </span>
  );
};

export default InlineError;
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PinCode } from '../src';

const App = () => {
  
  const [value, setValue] = React.useState('');

  return (
    <div>
      <p>{value}</p>
      <PinCode
        length={4}
        onChange={setValue}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

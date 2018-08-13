import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from './components';
import registerServiceWorker from './registerServiceWorker';

const Playground = (props) => {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}

ReactDOM.render(<Playground />, document.getElementById('root'));
registerServiceWorker();

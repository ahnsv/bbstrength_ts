import * as React from 'react';
import * as ReactDOM from 'react-dom';
import About from './components/About';

/**
 * TODO
 * 1. serve this with html
 * 2. use styled component
 * 3. testing
 * @constructor
 */
const Home: React.FunctionComponent = () => {
    const hello = ' hello';
    return (
        <div className={`home`}>
            {hello}
            <About age={`24`} name={`STA`} />
        </div>
    );
};

ReactDOM.render(<Home />, document.getElementById('app'));

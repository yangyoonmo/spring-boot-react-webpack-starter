import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';
import App from './App';

ReactDOM.render(
	<div>
	<h1 className="testblue">React + SpringBoot Env Test</h1>
	<App/>>
	</div>
	,
	document.querySelector('.container'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// console.log("module : ");
// console.log( module );
// console.log("module.hot : ");
// console.log( module.hot );

// if(module.hot){
//     module.hot.accept();
// }

// serviceWorker.unregister();


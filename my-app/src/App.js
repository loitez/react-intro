import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

const codeTag = createElement('code', {}, 'src/App.js')

const headerTag = createElement(
	'header',
	{ className: 'App-header' },
	createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
	createElement('p', {},
	'Edit ',
	codeTag,
	' and save to reload.'
),
	createElement(
		'a',
		{
			className: 'App-link',
			href: 'https://reactjs.org',
			target: '_blank',
			rel: 'noopener noreferrer',
		},
		'Learn React',
	),
	createElement('p', {}, `${new Date().getFullYear()}`)
);

export const App = () => {
	return createElement('div', { className: 'App' }, headerTag);
};

// export const App = () => {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.js</code> and save to reload.
// 				</p>
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Learn React
// 				</a>
// 				<p>{new Date().getFullYear()}</p>
// 			</header>
// 		</div>
// 	);
// };

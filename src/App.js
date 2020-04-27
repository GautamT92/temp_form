import React from 'react';
// import './App.css';
import { metadata1, metadata2, metadata3 } from './meta';
import FormRenderer from './components/Form/FormRenderer';
const App = () => {
	return (
		<div style={{ display: 'flex' }}>
			<div style={{ flex: 1 }}>
				<FormRenderer metadata={metadata1} />
			</div>
			<div style={{ flex: 1 }} />
		</div>
	);
};
export default App;

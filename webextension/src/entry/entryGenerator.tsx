import React from 'react'
import ReactDOM from 'react-dom'


export const entry = (Component:any) => {
	ReactDOM.render(
		<React.StrictMode>
			<Component />
		</React.StrictMode>,
		document.getElementById('root'),
	)
}

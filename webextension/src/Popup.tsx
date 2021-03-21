import { useEffect, useState } from 'react'


export const Popup = () => {
	const [url, setUrl] = useState(undefined)
	const [urls, setUrls] = useState([])
	const [show, setShow] = useState({})

	useEffect(() => {
	const doTheThing = async () => {
		await browser.tabs.create({})
	}

	return (
		<div>
			<p>You are on {url}</p>
			<button onClick={doTheThing}>Boom do your thing for the current url!</button>
			<p>{JSON.stringify(show)}</p>
			<p>This tab has been:</p>
			<ul>
				{urls.map(u => (
					<li key={u}>
						<p>{u}</p>
					</li>
				))}
			</ul>
		</div>
	)}

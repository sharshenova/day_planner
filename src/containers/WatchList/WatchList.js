import React from 'react';
import './WatchList.css';

function WatchList (props) {

	return (
		<div className='WatchList'>
			<h2>My Watch List</h2>
			<ol>
				<li>"Mentalist"</li>
				<li>"Stranger things"</li>
				<li>"Black mirror"</li>
				<li>"Game of Thrones"</li>
				<li>"Wild west world"</li>
				<li>"True detective"</li>
			</ol>
		</div>
	);
};

export default WatchList;


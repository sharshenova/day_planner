import React from 'react';
import './ReadList.css';

function ReadList (props) {

	return (
		<div className='WatchList'>
			<h2>My Read List</h2>
			<ol>
				<li>"451 градус по Фареншейту": Рэй Брэдбери</li>
				<li>"О дивный новый мир": Олдос Хаксли</li>
				<li>"Атлант расправил плечи": Айн Рэнд</li>
				<li>"Вино из одуванчиков": Рэй Брэдбери</li>
				<li>"Игры, в которые играют люди": Эрик Берн</li>
				<li>"Не рычите на собаку": Прайор Карен</li>
			</ol>
		</div>
	);
};

export default ReadList;
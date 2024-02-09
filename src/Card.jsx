import './Card.css';

function Card({week, style}) {
	function agregar() {
		
	}
	return(
		<>
			<div className='card' style={style}>
				<div className='week'>
					<h2>{week}</h2>
				</div>
				<div className='card-board'>
					<div id='list'></div>
					<label className='info'>
						<input type="text" id="text"/>
						<button onClick={agregar()}>Agregar</button>
					</label>
				</div>
			</div>
		</>
		);
}

export default Card;
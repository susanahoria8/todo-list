
import React, { Fragment } from "react";

const Checkbox = (props) => {
	const {
		onChange,
		data: {id, description, done}
	} = props;
	
	return (
		<>
			<Fragment>
				<label className='todo new-item'>
					{/*(B) (C)*/}
					<input 
					className='todo_state'
					name={id}
					type='checkbox'
					defaultChecked={done}
					onChange={onChange}
					/>
					<div className='todo_text'>{description}</div>
				</label>
			</Fragment>
		</>
		);
	
};

export default Checkbox;
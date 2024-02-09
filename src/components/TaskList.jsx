import React from "react";
import Checkbox from './Checkbox';
import '../Card.css'
const TaskList = (props) => {
  // (C)
  const { list, setList, week, tittle, card} = props;

  const onChangeStatus = e => {
    const { name, checked } = e.target;

    // (E)
    const updateList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
    }));
    setList(updateList);
  };

  // (D)
  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done);
    setList(updateList);
  };

  // (A-2)
  const chk = list.map(item => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div className="card">
    	<div className='week' style={tittle}>
					<h2>{week}</h2>
		</div>
    	<div className='card-board' style={card}>
	      	{/*(A-1)*/}
	    	{list.length ? chk : 
	    		<div className='no-tasks'>
	    			<label className='todo'></label>
	    			<label className='todo'>  </label>
	    			<label className='todo center'>No Task</label>
	    			<label className='todo'></label>
	    		</div>}
		    {/*(B)*/}
		    {list.length ? (
			    <div className='btn-container'>
				    <p>
				    	<button className="button blue" onClick={onClickRemoveItem}>
				          Delete all done
				        </button>
				    </p>
				</div>
			) : null}
			    
      </div>
    </div>
  );
};

export default TaskList;


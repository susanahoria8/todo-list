import './App.css';
import Card from './Card';

function Todo() {

  return (
    <>
      <h1>Todo List</h1>
      <div className='container'>
        <div className='priorities'>
          <Card week='Priorities' />
        </div> 
        <div className='weeks-road'>
          <Card week='Monday' />
          <Card week='Tuesday' />
          <Card week='Wednesday' />
          <Card week='Thursday' />
          <Card week='Friday' />
          <Card week='Saturday' />
          <Card week='Sunday' />
          <Card week='Notes' style={{gridColumn: 'span 2'}} />
        </div>
      </div>
    </>
  );
}

export default Todo;

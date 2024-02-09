import './App.scss';
import './Todo.css'
import Card from './Card';
import Container from './components/Container';
import Tittle from './tittle.png'

function App() {

  return (
    <>
      <div className='tittle' style={{ backgroundImage: `url(${Tittle})`,
       backgroundRepeat: 'no-repeat',
       backgroundPosition: 'center',
       height :'150px'
      }}>
        <h1>Todo List</h1>
      </div>
        <div className='container'>
          <div className='priorities'>
            <Container week='Priorities' />
          </div> 
          <div className='weeks-road'>          
            <Container week='Monday' tittle={{backgroundColor: '#FFC0D9'}} card={{backgroundColor: '#FF90BC'}}/>
            <Container week='Tuesday' tittle={{backgroundColor: '#A1EEBD'}} card={{backgroundColor: '#A2CDB0'}}/>
            <Container week='Wednesday' tittle={{backgroundColor: '#F4F27E'}} card={{backgroundColor: '#FCF9BE'}}/>
            <Container week='Thursday' tittle={{backgroundColor: '#7F669D'}} card={{backgroundColor: '#BA94D1'}}/>
            <Container week='Friday'  tittle={{backgroundColor: '#FFDBA4'}} card={{backgroundColor: '#F29393'}}/>
            <Container week='Saturday' tittle={{backgroundColor: '#BE8C63'}} card={{backgroundColor: '#A97155'}}/>
            <Container week='Sunday'  tittle={{backgroundColor: '#CDFCF6'}} card={{backgroundColor: '#98A8F8'}}/>
            <Container week='Notes' style= {{gridColumn: 'span 2'}} />

          </div>
        </div>
    </>
  );
}

export default App;

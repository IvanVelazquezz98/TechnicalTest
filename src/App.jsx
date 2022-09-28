import react, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Components/Dropdown/Dropdown'
import Search from './Components/Search/Search';
import {getData} from './Utils/GetData'
import Cards from './Components/Cards/Cards'

function App() {
  const [data,setData]  = useState([])


  async function getClients(){ 
    const getFilteredData = await getData()
    return setData(getFilteredData)
  }
 

  useEffect(() => {
   getClients() 
  }, [data])

console.log(data)
  return (
    <div className="App">
      <Dropdown/>
      <Search/>
      <input type="text" placeholder='Filter..'/>
      {data ? 
      data.map(element => {
        return (
              <Cards 
                    nombre={element.nombre ? element.nombre : <p>-</p>}
                    razon_social={element.razon_social ? element.razon_social : <p>-</p> } 
                    nit={element .nit ? element.nit : <p>-</p> }
                    telefono={element.telefono ? element.telefono : <p>-</p>}
                    codigo={element.codigo ? element.codigo : <p>-</p>}
                    key={element.id}
                    e={element}>             
               </Cards> ) }
          
            ) : <p>Loading...</p> }
        </div>
    
   
  );
}

export default App;

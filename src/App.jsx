import react, {useState, useEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './Components/Dropdown/Dropdown'
import Search from './Components/Search/Search';
import {getData} from './Utils/GetData'
import Cards from './Components/Cards/Cards'

//  export const changeTerm = (term)=> {
//   return (term)
//   console.log(term)
//    }


function App() {
  const [data,setData]  = useState([])
  const [searchTerm , setSearchTerm] = useState('')
  const [term ,setTerm] = useState('nombre')

  // console.log('term de app',term)

  function changeTermDropdown(term) {
    setTerm(term)
    return term
  }

  async function getClients(){ 
    const getFilteredData = await getData()
    return setData(getFilteredData)
  }


  useEffect(() => {
    if(data?.length === 0){
     getClients()
    return console.log('data adquirida') }
     else if (data?.length < 0){
     return  console.log('Bienvenido a mi app :D')
     }
  }, [data])

// console.log(data)
  return (
    <div className="App">
      <Dropdown changeTermDropdown={changeTermDropdown}/>
      <input type="text" placeholder='Filter..' 
      onChange={event => {setSearchTerm(event.target.value)}}/>

      {data ? 
      data.filter((val) =>{
        if(searchTerm == ""){
          return val
        } else if(val?.[term].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ){
          return val
        }
      }).map(element => {
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

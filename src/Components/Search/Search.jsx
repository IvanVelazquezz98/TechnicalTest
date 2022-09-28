import react, { useState, useEffect} from 'react';
import { getData } from '../../Utils/GetData'
import Cards from '../Cards/Cards'


function Search({changeTermDropdown , term}) {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  async function getClients() {
    const getFilteredData = await getData()
    return setData(getFilteredData)
  }


  useEffect(() => {
    if (data?.length === 0) {
      getClients()
      return console.log('data adquirida')
    }
    else if (data?.length < 0) {
      return console.log('Bienvenido a mi app :D')
    }
  }, [data])

  return (
    <div className="App">
      <input type="text" placeholder='Filter..'
        onChange={event => { setSearchTerm(event.target.value) }} />

      {data ?
        data.filter((val) => {
          if (searchTerm === "") {
            return val
          } else if (val?.[term].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            return val
          }
        }).map(element => {
          return (
            <Cards
              nombre={element.nombre ? element.nombre : <p>-</p>}
              razon_social={element.razon_social ? element.razon_social : <p>-</p>}
              nit={element.nit ? element.nit : <p>-</p>}
              telefono={element.telefono ? element.telefono : <p>-</p>}
              codigo={element.codigo ? element.codigo : <p>-</p>}
              key={element.id}
              e={element}>
            </Cards>)
        }

        ) : <p>Loading...</p>}
    
    </div>


  );
}

export default Search;
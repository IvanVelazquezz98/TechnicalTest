import react, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx'
import { getData } from '../../Utils/GetData'
import Cards from '../Cards/Cards'
import useLazyLoad from '../LazyLoading/useLazyLoad';
import {LoadingPosts} from '../Loading/LoadingPost';
import { searchLimit, traermas } from '../../Utils/GetData'
import styles from './Search.module.css'


const NUM_PER_PAGE = 13;
const TOTAL_PAGES = 5;

function Search({ changeTermDropdown, term }) {
  const [dataDb, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const triggerRef = useRef(null)

  const onGrabData = (currentPage) => {
    // if(data.legth > dataDb.lenght){
    //     return
    //   }
    
    return new Promise((resolve) => {
  
        const data = dataDb.slice( 
        ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
        NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
         ) ;
        //  let filter = data.filter()
        //  console.log('filter', filter)
        console.log(data);
        resolve(data);
 
        })}


  const {data, loading} = useLazyLoad({triggerRef,onGrabData})
  console.log('datalazy',data)

 

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
  }, [])
  console.log('data', data)

  return (
    <div className={styles.firstContainer}>

      <div>
        <input type="text" placeholder='Filter..'
          onChange={event => { setSearchTerm(event.target.value) }} />
      </div>
      <div className={styles.gameContainer}>

      {/* <InfiniteScroll 
            dataLength={dataDb.legth}//new
           pageStart={0}
           loadMore={loading}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
        > */}

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
              </Cards>

            )

          }
         
          ) : <p>Loading...</p>}
        {/* </InfiniteScroll> */}
          <div ref={triggerRef} className={clsx('trigger' , {visible:false})}> <LoadingPosts /></div>
          
      </div>
    </div>


  );
}

export default Search;
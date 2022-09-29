import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx'
import { getData } from '../../Utils/GetData'
import Cards from '../Cards/Cards'
import useLazyLoad from '../LazyLoading/useLazyLoad';
import { LoadingPosts } from '../Loading/LoadingPost';
import styles from './Search.module.css'


const NUM_PER_PAGE = 13;
const TOTAL_PAGES = 3;

function Search({ changeTermDropdown, term }) {
  const [dataDb, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const triggerRef = useRef(null)

  const onGrabData = (currentPage) => {


    return new Promise((resolve) => {

      const data = dataDb.slice(
        ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
        NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
      );
      console.log(data);
      resolve(data);

    })
  }


  const { data, loading } = useLazyLoad({ triggerRef, onGrabData })
  console.log('datalazy', data)



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
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" placeholder='Filter..'
          onChange={event => { setSearchTerm(event.target.value) }} />
      </div>
      <div className={styles.objectContainer}>

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
       
        <div ref={triggerRef} className={clsx('trigger', { visible: false })}> <LoadingPosts /></div>

      </div>
    </div>


  );
}

export default Search;
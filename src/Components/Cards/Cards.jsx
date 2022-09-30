import React, { useState } from 'react';
import styles from '../Cards/Cards.module.css'

export default function Card({ nombre,razon_social,nit,telefono,codigo }){
    return (
            
        <div className={styles.mainContainer} >
        <img className={styles.image}  src={('https://old.tugerente.com/Imagenes/logotugnew.png') } alt="Image not found"/>
        <div className={styles.innerContainer} >
                <h3 className={styles.name}>Nombre:{ ' ' +  nombre ? nombre : <p>Loading..</p>}</h3>
                <h5 className={styles.text} >Razon Social:{ ' ' + razon_social ? razon_social : <p>Loading..</p>}</h5>
                <h5 className={styles.text}>Nit: { ' ' + nit ? nit : <p>Loading..</p>}</h5>
                <h5 className={styles.text}>Telefono: { ' ' + telefono ? telefono : <p>Loading..</p>}</h5>
                <h5 className={styles.text}>Codigo: { ' ' + codigo ? codigo : <p>Loading..</p>}</h5>
                </div>
            </div>
      
    )
}
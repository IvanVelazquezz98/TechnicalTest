import React, { useState } from 'react';

export default function Card({ nombre,razon_social,nit,telefono,codigo }){
    return (
        <div >
            
            <div >
                <h3 > {nombre ? nombre : <p>Loading..</p>}</h3>
                <h5 >{razon_social ? razon_social : <p>Loading..</p>}</h5>
                <h5 >{nit ? nit : <p>Loading..</p>}</h5>
                <h5 >{telefono ? telefono : <p>Loading..</p>}</h5>
                <h5 >{codigo ? codigo : <p>Loading..</p>}</h5>
                
            </div>
        </div>
    )
}
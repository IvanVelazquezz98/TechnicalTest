import React from "react";
import styles from './Loader.module.css'
export default function Loader() {


    return(
        <div >
            <br></br>
        <img  src= {"https://i.pinimg.com/originals/93/6b/3a/936b3a9a817fed848e7025c0430cbb10.gif"
         ? "https://i.pinimg.com/originals/93/6b/3a/936b3a9a817fed848e7025c0430cbb10.gif" :
          <p>Loading..</p> } alt="loading.." border="0"/>
        </div>
    )
}
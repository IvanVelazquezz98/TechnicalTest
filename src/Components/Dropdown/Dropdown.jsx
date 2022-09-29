import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '../Modal/Modal'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import styles from './Dropdown.module.css'



export default function DropdownInput({changeTermDropdown ,handleRenderSearch}) {

  const [dropdown, setDropdown] = useState(false);
  const [show, setShow] = useState(false)
  

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown)
  }
  function handleClose() {
    openModal()
  }
  
  async function openModal() {
    show == true ? setShow(false) : setShow(true)
  }

  return (
    <div className={styles.mainContainer}>
      {show ? <Modal showClose={handleClose} /> : null}


      <br></br>
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
        <DropdownToggle onClick={() => handleRenderSearch()} className={styles.dropdownContent} caret >
          Open drowdown 
        </DropdownToggle>
        <DropdownMenu >
          <DropdownItem onClick={openModal}>
            Crear Cliente
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className={styles.filtros} onClick={() => changeTermDropdown('nombre')} >Nombre</DropdownItem>
          <DropdownItem className={styles.filtros} onClick={() => changeTermDropdown('razon_social')} >Razon Social</DropdownItem>
          <DropdownItem className={styles.filtros} onClick={() => changeTermDropdown('nit')}>Nit</DropdownItem>
          <DropdownItem className={styles.filtros} onClick={() => changeTermDropdown('telefono')}>Telefono</DropdownItem>
          <DropdownItem className={styles.filtros} onClick={() => changeTermDropdown('codigo')} >Codigo</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}



import react , {useState} from 'react'
// import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '../Modal/Modal'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';



export default function DropdownInput() {

  const [dropdown , setDropdown] = useState(false);
  const [show , setShow] = useState(false)
  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown)
  }
  function handleClose(){
    openModal()
  }
 async function openModal (){
   show == true ? setShow(false) : setShow(true)
  }

  return (
    <>
    {show? <Modal showClose={handleClose}/> : null}

    
    <br></br>

    <Dropdown  isOpen={dropdown} toggle={abrirCerrarDropdown}> 
    <DropdownToggle caret >
      Open Dropdown
    </DropdownToggle>
    <DropdownMenu>
    <DropdownItem onClick={openModal} >
    Crear Cliente
    </DropdownItem>

    <DropdownItem />
    <DropdownItem divider/>
      <DropdownItem >Nombre</DropdownItem>
      <DropdownItem >Razon Social</DropdownItem>
      <DropdownItem >Nit</DropdownItem>
      <DropdownItem >Telefono</DropdownItem>
      <DropdownItem >Codigo</DropdownItem>
    </DropdownMenu>
    </Dropdown>
    </>
  );
}



import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { FcCheckmark } from "react-icons/fc"
import { createClient } from "../../Utils/CreateClient"
import Loader from '../Loading/Loader'
import styles from './Modal.module.css'
import { validate } from './validateInput'

export default function ModalInput({ showClose, closeModal }) {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false)

  const [input, setInput] = useState({
    nombre: '',
    razon_social: '',
    nit: '',
    telefono: '',
    codigo: '',

  })
  const [errors, setErrors] = useState({
    nombre: 'inicio',
    razon_social: 'inicio',
    nit: 'inicio',
    telefono: 'inicio',
    codigo: 'inicio',
  })

  const [errorCreate, seterrorCreate] = useState(false)

  const handleReload = () => {
    window.location.reload();
  }

  function handleClose() {
    closeModal()
    setShow(false)
  }

  function handleChange(e) {
    // e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setShow(true)
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let charactersMax = 60

    if (!input.nombre || !input.nombre
      || !input.razon_social || !input.nit) {
      e.preventDefault()
      return alert('Algo salio mal.. :c')
    }
    else {
      e.preventDefault()
      seterrorCreate(false)
      await createClient(input)
      closeModal()
      handleClose(false)
      return handleReload()
    }
  }

  const optionsInput = [
    {
      name: 'Nombre',
      id: 'nombre'
    },
    {
      name: 'Razón Social',
      id: 'razon_social'
    },
    {
      name: 'NIT',
      id: 'nit'
    },
    {
      name: 'Teléfono',
      id: 'telefono'
    },
    {
      name: 'Código',
      id: 'codigo'
    }
  ]

  return (
    <>

      <Modal show={show}>
        <Modal.Header closeButton onClick={handleClose} >
          <Modal.Title>Crear Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre: </Form.Label>
            <Form.Control
              type="nombre"
              id="nombre"
              name="nombre"
              value={input.nombre}
              onChange={(e) => handleChange(e)}
              required
            />
            {errors.nombre === "inicio" ? null :
              errors.nombre !== "error" ? (<FcCheckmark />) : null}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Razon Social: </Form.Label>
            <Form.Control
              type="razon_social"
              id="razon_social"
              name="razon_social"
              value={input.razon_social}
              onChange={(e) => handleChange(e)}
              required
            />
            {errors.razon_social === "inicio" ? null :
              errors.razon_social !== "error" ? (<FcCheckmark />) : null}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nit: </Form.Label>
            <Form.Control
              type="nit"
              id="nit"
              name="nit"
              value={input.nit}
              onChange={(e) => handleChange(e)}
              required
            />
            {errors.nit === "inicio" ? null :
              errors.nit !== "error" ? (<FcCheckmark />) : null}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefono: </Form.Label>
            <Form.Control
              type="telefono"
              id="telefono"
              name="telefono"
              value={input.telefono}
              onChange={(e) => handleChange(e)}
              required
            />
            {errors.telefono === "inicio" ? null :
              errors.telefono !== "error" ? (<FcCheckmark />) : null}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Codigo: </Form.Label>
            <Form.Control
              type="codigo"
              id="codigo"
              name="codigo"
              value={input.codigo}
              onChange={(e) => handleChange(e)}
              required
            />
            {errors.codigo === "inicio" ? null :
              errors.codigo !== "error" ? (<FcCheckmark />) : null}
          </Form.Group>
        </Modal.Body>
        {loading ? <Loader className={styles.loaderContainer} /> : null}
        {errorCreate ? <div class="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div> : null}
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Crear
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


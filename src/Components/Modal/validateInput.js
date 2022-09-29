export function validate(input) {
  let charactersMax = 60


  let errors = {}


  if (!input.nombre) {
    errors.nombre = "error"
  }
  if (input.nombre.legth === 0) {
    errors.nombre = "error"
  }
  if (input.nombre < charactersMax) {
    errors.nombre = ""
  }
  else {
    errors.nombre = "error"
  }

  if (!input.razon_social) {
    errors.razon_social = "error"
  }
  if (input.razon_social.length <= 4) {
    errors.razon_social = "error"
  } else {
    errors.razon_social = ""
  }

  if (!input.nit) {
    errors.nit = "error"
  }
  if (input.nit.legth === 0) {
    errors.nit = "error"
  }
  if (input.nit < charactersMax) {
    errors.nit = ""
  }
  if (/[A-Za-z0-9]/.test(input.nit)) {
    errors.nit = ""
  }
  else {
    errors.nit = "error"
  }
  if (!input.telefono) {
    errors.telefono = "error"
  }
  if (input.telefono.legth < 0) {
    errors.telefono = "error"
  }
  if (input.telefono > charactersMax) {
    errors.telefono = ""
  }
  else {
    errors.telefono = "error"
  }

  if (!input.codigo) {
    errors.codigo = "error"
  }
  if (input.codigo.legth <= 0) {
    errors.codigo = "error"
  }
  if (input.codigo < charactersMax) {
    errors.codigo = ""
  }
  else {
    errors.codigo = "error"
  }

  return errors
}


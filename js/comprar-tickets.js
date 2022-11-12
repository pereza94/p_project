/* const TICKET = 200;
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.querySelector("#mail");
const cantidad = document.querySelector("#cantidadTickets");
const categoria = document.querySelector("#categoriaSelect");
const totalPago = document.querySelector("#totalPago");

const btnBorrar = document.querySelector("#btnBorrar");
const btnCalcular = document.querySelector("#btnResumen");

btnBorrar.addEventListener("click", borrar);
btnCalcular.addEventListener("click", mostrarTotal);

function borrar() {
  nombre.value = "";
  apellido.value = "";
  email.value = "";
  cantidad.value = "";
  cantidad.value = "";
  totalPago.textContent = "";
}

function calcularDescuento() {
  switch (categoria.value) {
    case "0":
      return 1;
    case "1":
      return 0.8;
    case "2":
      return 0.5;
    case "3":
      return 0.15;
    default:
      return false;
  }
}

function calcularTotal() {
  let total = 0;
  total = parseInt(cantidad.value) * calcularDescuento() * TICKET;
  return total;
}

function mostrarTotal() {
  totalPago.textContent = calcularTotal();
}￼

//FALTAN VALIDACIONES
 */

/* 
TAREAS:
    PRINCIPAL: CALCULAR EL VALOR DE TICKETS ADQUIRIDOS SEGUN CANTIDAD Y CATEGORIA DE DESCUENTO
    1. ESTABLECER VALOR DE UN TICKET
    2. ESTABLECER PORCENTAJES DE LOS DESCUENTOS
    3. CONOCER LA CANTIDAD DE TICKETS Y EL DESCUENTO CORRESPONDIENTE
    4. EN CASO QUE EXISTA DESCUENTO APLICARLO AL VALOR UNITARIO DEL TICKET
    5. MULTIPLICAR LA CANTIDAD DE TICKETS POR EL VALOR UNITARIO DE TICKET CON EL DESCUENTTO SI CORRESPONDE
    6. MOSTRAR EL TOTAL DE LA COMPRA EN LA PANTALLA
    
    SECUNDARIAS:
    1. VALIDAR LOS DATOS INGRESADOS POR EL USUARIO
    2. PODER BORRAR EL FORMULARIO AL PRESIONAR UN BOTON


*/
//  1. ESTABLECER VALOR DE UN TICKET
const TICKET = 200;

// 2. ESTABLECER PORCENTAJES DE LOS DESCUENTOS

const ESTUDIANTE = 80;
const TRAINEE = 50;
const JUNIOR = 30;

// 3. CREAR VARIABLES DE LOS ELEMENTOS
let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let email = document.querySelector("#mail");
let cantidad = document.querySelector("#cantidadTickets");
let categoria = document.querySelector("#categoriaSelect");
let resultado = document.querySelector("#totalPago");
let btnBorrar = document.querySelector("#btnBorrar");
let btnCalcular = document.querySelector("#btnResumen");
let formTicket = document.querySelector("#form-ticket")

// 4. APLICAR LA ESTRATEGIA PARA ESCUCHAR O CAPTURAR EL EVENTO

btnCalcular.addEventListener("click", validator);
btnBorrar.addEventListener("click", borrar);

function calcularTotal(event) {
  //event.preventDefault();
  let descuento = calcularDescuento(categoria.value);
  console.log(cantidad.value)
  resultado.textContent = (TICKET - descuento) * cantidad.value;
}


function calcularDescuento(categoria) {
  switch (categoria) {
    case "0":
      return 0;
    case "1":
      return (TICKET * 80) / 100;
    case "2":
      return (TICKET * 50) / 100;
    case "3":
      return (TICKET * 15) / 100;
    default:
      return 0;
  }
}

function borrar() {
  nombre.value = "";
  apellido.value = "";
  cantidad.value = "";
  categoria.value = "";
  resultado.textContent = "";
}

function mostrarTotal() {
    totalPago.textContent = calcularTotal();
  }

function validator() {
    'use strict'
  
    
    console.log("ejecuto validator")

        // agarra el formulario a validar
          var form = document.querySelectorAll('.needs-validation')[0]

          let validation_fail = (!form.checkValidity() || ( 0 < parseInt(cantidad.value) < 5) ) 
          if (validation_fail) {
            event.preventDefault()
            event.stopPropagation()
            resultado.textContent = "Por favor complete todos los campos necesarios";
          }  
          form.classList.add('was-validated')
          if (form.checkValidity()){
            //calcularTotal()
            console.log('valido los campos')
            
          }
        }

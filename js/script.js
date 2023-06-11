var valorTicket=200;
var cantTickets = 0;

function mostrarMontoCategoria(){
let catSeleccionada = document.getElementById("categoria-form-ticket").value;
let titulo = document.getElementById("form-valor-ticket-titulo");
  // Aquí puedes realizar las acciones que deseas con el valor seleccionado
  switch (catSeleccionada) {
    case "estudiante":
      valorTicket = 200;
      break;
    case "trainee":
      valorTicket = 300;
      break;
    case "junior":
      valorTicket = 400;
      break;
    default:
      console.log("Opción no válida");
      break;
  }
  
titulo.textContent = "VALOR DE TICKET $" + valorTicket;
}

function mostrarTotal(){
  let cantTickets = document.getElementById("cantidad-form-ticket").value;
  let total = document.getElementById("total-form-ticket");
  total.removeAttribute("hidden"); 
  

  total.textContent = "Total a pagar $" + (cantTickets * valorTicket)
}
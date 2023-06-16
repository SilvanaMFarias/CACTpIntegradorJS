var valorTicket=200;
var porcDesc=0.8;

function establecerPorcDesc(){
let catSeleccionada = document.getElementById("categoria-form-ticket").value;
let titulo = document.getElementById("form-valor-ticket-titulo");
  // Aquí puedes realizar las acciones que deseas con el valor seleccionado
  switch (catSeleccionada) {
    case "estudiante":
      porcDesc = 0.8;
      break;
    case "trainee":
      porcDesc = 0.5;
      break;
    case "junior":
      porcDesc = 0.15;
      break;
    default:
      console.log("Opción no válida");
      break;
  }
  
}

function mostrarTotal(){
  let cantTickets = parseInt(document.getElementById("cantidad-form-ticket").value);
  let totalComponente = document.getElementById("total-form-ticket");
  let totalAPagar = (cantTickets * valorTicket * ( 1 - porcDesc));
  let descRealizado = cantTickets * valorTicket * porcDesc;
  totalComponente.removeAttribute("hidden"); 
  totalComponente.textContent = "Total a pagar $" + totalAPagar.toFixed(2) + " (Ahorro $" + descRealizado.toFixed(2) + ")"
} 
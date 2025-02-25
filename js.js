function submitRental(){
    // Aquí podrías validar el formulario si es necesario
    Swal.fire('Enviado', 'Renta reservada con exito', 'success');
    // Opcional: Cerrar el modal tras enviar
    var modalEl = document.getElementById('rentalModal');
    var modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  }
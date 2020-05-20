function ok(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var cedula = document.getElementById("cedula").value;
    var json = [nombre, apellido,edad,telefono,email,cedula];
    alert(json);
}



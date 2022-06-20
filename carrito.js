alert("¡Hola! Bienvenidos al SHOP oficial de Harry Styles");

//REGISTRO
let registro=prompt("¿Se encuentra registrado a la tienda? Si/No"); 

if(registro=="no" || registro=="No"){
    let usuario=prompt("Ingrese su nombre de usuario");
    let contraseña=prompt("Ingrese su contraseña:");
    let confirm=prompt("Ingrese nuevamente la contraseña:")
    if(contraseña===confirm){
        alert("Registro correcto!");
    }
    else{
        alert("¡Las contraseñas ingresadas no coinciden!");
    }
}


function compra(producto, cantidad){//Funcion para calculo de subtotal y aviso de subtotal
    switch(producto){
        case "Buzo":
            let subtotal1=cantidad*7500;
            alert(`Esta comprando ${cantidad} unidades por $ ${subtotal1}`);
        return subtotal1;
        case "Remera":
            let subtotal2=cantidad*4000;
            alert(`Esta comprando ${cantidad} unidades por $ ${subtotal2}`);
        return subtotal2;
        case "Accesorios":
            let subtotal3=cantidad*2500;
            alert(`Esta comprando ${cantidad} unidades por $ ${subtotal3}`);
        return subtotal3;
        default:
            alert("Producto inexistente");
    }
}




if(registro=="si" || registro=="Si"){
    let usuario=prompt("Ingrese el usuario:");
    let pass=prompt("Ingrese contraseña:");
    alert("Ingreso Correcto");
    let otro="si";
    let total=0;

    while(otro=="si"){
        
        let idProd=prompt("Ingrese el produto que desea comprar: ");
        let cantProd;
        if (idProd==="Buzo" || idProd==="Remera" || idProd==="Accesorios" ){
            
            cantProd=prompt("Ingrese cantidad: ");
            while(isNaN(cantProd)){
                alert("No ha ingreasado un Numero!");
                cantProd=prompt("Ingrese cantidad: ");

            }
        }

        total=total+compra(idProd, cantProd);
        otro=prompt("Desea seguir comprado? Si/No");
        
    }
    if(otro=="No"){
        alert(`El total a abonar es $${total}`);
    }
}
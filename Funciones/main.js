function userData(name, surname, edad){
  if(edad < 18){
    return console.log("Usted se llama "+name+" "+surname+" y es menor de edad ");
  }
  else if(edad >= 18 && edad < 60){
    return console.log("Usted se llama "+name+ " "+surname+ " y es mayor de edad");
  }
  else if (edad >=60){
    return console.log("Usted se llama "+name+ " "+surname+ " y esta en la tercera edad");
  }

}

userData("Marcos","Nahuel", 67);


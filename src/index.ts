let dimension:number=Number(prompt(´Ingrese dimension:´)); 
let nombres:string[] = new Array(dimension);
let indice:number;
for (let indice=0;indice < nombres.length ; indice++){
  nombres[indice]=prompt("Ingrese el nombre" ${indice}:");
}
for (let i = 0; i< nombres.length; i++){
  console.log(`la persona en la posicion ${i}es:${nombres[i]}´);
}


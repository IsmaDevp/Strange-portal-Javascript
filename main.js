"use strict"
//creamos elemento portal buscandolo por su id en HTML
let portal = document.getElementById('portal')

//360 chispas creando un nuevo div para cada una 
for (let i = 0; i < 360; i++){
    let spark = document.createElement("div");
    spark.className = "spark"; //añadimos la clase spark
    spark.style.rotate = i * 2 + 'deg'; //rote respecto al contador del bucle

    //calculo de número entre 120 y 100
    let sparkTranslation = Math.random() * (120 -100) + 100;

    //usamos el calculo anterior para transladar la chispa
    spark.style.transform = 'translate('+sparkTranslation+'px)'

    //agregamos las chispas al portal
    portal.appendChild(spark)
}
# PryStepper

Este proyecto fue creado mediante el comando `ng new pry-stepper --no-standalone`

Existe un componente que aloja a los pasos, funcionando como padre.
Cada uno de los componentes de los pasos funcionan como "hijos" y tienen sus propios formularios que serán emitidos al componente padre, para que el envíe un solo objeto unico final.

En Angular, el decorador @Output() junto con EventEmitter se utiliza para enviar datos desde un componente hijo a un componente padre mediante un evento personalizado. Esto es especialmente útil para la comunicación entre componentes cuando el flujo de datos va "hacia arriba".

Lo que no me gusta de esta aproximación es que cada paso tiene ademas del boton siguiente (o anterior, del 2do paso en adelante) un boton guardar para el formulario.
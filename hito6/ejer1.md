# Ejercicio 1

## Instalar etcd3, averiguar qué bibliotecas funcionan bien con el lenguaje que estemos escribiendo el proyecto (u otro lenguaje), y hacer un pequeño ejemplo de almacenamiento y recuperación de una clave; hacer el almacenamiento desde la línea de órdenes (con etcdctl) y la recuperación desde el mini-programa que hagáis.

[Aquí](https://www.rubydoc.info/gems/etcdv3) podrás encontrar información relativa a etcdv3 en Ruby

### instalación de etcd3

Para poner en marcha etcdv3 en Ruby instalamos la siguiente gema:

> gem install etcdv3

![installetcdv3](https://github.com/mariasanzs/EjerciciosIV/blob/master/img/installetcdv3.png)

Una vez tenemos hecho esto podemos establecer una conexión creando un sencillo programa similar a este:

![etcdv3-rb](https://github.com/mariasanzs/EjerciciosIV/blob/master/img/etcdv3-rb.png)

Para hacerlo se han seguido las directrices de la documentación indicada arriba.

Podemos probar ahora que nuestro programa funciona creando un primer valor para 'clave' y obteniendo dicho valor ejecutando el programa:

![prueba-etcdv3](https://github.com/mariasanzs/EjerciciosIV/blob/master/img/prueba-etcdv3.png)



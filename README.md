# Draw prompt bookmark
Este proyecto usa node and gulp-minify para minificar el archivo *script.js* que contiene el codigo que sera agregado a un marcador para obtener una idea para dibujar, pintar, estudiar, etc.

Para instalar, se debe correr el comando ``npm install``.

Para minificar el archivo script.js solo corre:  ``npm start ``

# Sobre del codigo

Retornara una alerta con una tecnica de arte y una idea de esta forma: 

![Alerta que dice Usando Aguadas dibuja lugar](./doc_images/alertSample.jpg?raw=true "Ejemplo alerta mensaje ")

## Tecnicas 
    - 'Acuarela',
    - 'Gouache',
    - 'Carboncillo',
    - 'Acrilico',
    - 'Lapices de colores',
    - 'Tinta',
    - 'Aguadas',
    - 'Pastel seco',
    - 'Pastel graso',
    - 'Marcadores',
    - 'Grabado',
    - 'Collage',
    - 'Grafito',
    - 'Oleo'

## Ideas 
    -'planta/s',
    -'animal/es',
    -'personaje y accion',
    -'figura humana',
    -'un poema',
    -'lugar',
    -'perspectiva',
    -'un objeto transformado en otra cosa',
    -'un fragmento de un libro',
    -'una derivada de un viejo dibujo',
    -'una frase',
    -'un bodegon',
    -'Otro bodegon

# Configurar 

## Paso a paso en chrome 

1. Ir al administrador de marcadores

![Administrador de marcadores](./doc_images/bookmark_1.png?raw=true "Acceso bookmar manager")

2. Agregar nuevo marcador 

![Nuevo marcador](./doc_images/bookmark_2.png?raw=true "Nuevo marcador")

3. Pegar codigo en url

![Configuracion de bookmark](./doc_images/bookmark_3.png?raw=true "Configurar bookmark")

**Nota**

Tambien puedes darle click derecho y editar a un marcador que ya tengas.

## Script a pegar
En su navegador cree o edite un marcador, y en la seccion de url debes colocar el script como el del ejemplo. Entre las etiquetas `script` se puede pegar el codigo del archivo [./script-min.js](./script-min.js)

```
data:text/html,<script></script>
```

Ejemplo 

```

data:text/html,<script>tecnicas=["Acuarela","Gouache","Carboncillo","Acrilico","Lapices de colores","Tinta","Aguadas","Pastel seco","Pastel graso","Marcadores","Grabado","Collage","Grafito","Oleo"],ideas=["planta/s","animal/es","personaje y accion","figura humana","un poema","lugar","perspectiva","un objeto transformado en otra cosa","un fragmento de un libro","una derivada de un viejo dibujo","una frase","un bodegon","tu rutina diaria","una cancion"],tec_seleccionada=tecnicas[Math.floor(Math.random()*(tecnicas.length-2))],idea_seleccionada=ideas[Math.floor(Math.random()*(ideas.length-2))],alert(`Usando ${tec_seleccionada} dibuja ${idea_seleccionada}`),setTimeout(()=>window.history.back(),0);</script>

```
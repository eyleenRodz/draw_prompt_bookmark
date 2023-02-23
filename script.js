tecnicas = [ 
    'Acuarela',
    'Gouache',
    'Carboncillo',
    'Acrilico',
    'Lapices de colores',
    'Tinta',
    'Aguadas',
    'Pastel seco',
    'Pastel graso',
    'Marcadores',
    'Grabado',
    'Collage',
    'Grafito',
    'Oleo'
]; 
ideas = [
    'planta/s',
    'animal/es',
    'personaje y accion',
    'figura humana',
    'un poema',
    'lugar',
    'perspectiva',
    'un objeto transformado en otra cosa',
    'un fragmento de un libro',
    'una derivada de un viejo dibujo',
    'una frase',
    'un bodegon',
    'tu rutina diaria',
    'una cancion'
];

tec_seleccionada = tecnicas[Math.floor(Math.random() * (tecnicas.length - 2) )];
idea_seleccionada = ideas[Math.floor(Math.random() * ((ideas.length-2)))];

alert(`Usando ${tec_seleccionada} dibuja ${idea_seleccionada}`);
setTimeout(() => window.history.back(),0);
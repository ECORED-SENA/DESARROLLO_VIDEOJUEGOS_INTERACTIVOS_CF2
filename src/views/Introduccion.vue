<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-lg-1
      .col-lg-10
        figure.mb-5
          img(src='@/assets/curso/introduccion/img01.png') 
      .col-lg-1

    .bloque-texto-b.color-acento-contenido.p-4
      .bloque-texto-b__texto        
        p.mb-0 Los principios básicos del diseño permiten bosquejar y diseñar los personajes, escenarios y props, que harán parte de un videojuego, para el cual se hará uso de la anatomía básica, comprendiendo la composición de los elementos de un personaje y su gestualidad. A su vez, se abordará cómo estos personajes pueden prepararse para su realización en 3D, con el diseño de un blueprint. Esto permitirá, integrarse en el software Blender versión 2.9, del cual se explicará su interfaz gráfica, además de las técnicas de modelado. Asimismo, el componente relacionará conceptos de color y texturas, materiales, texturizado y creación de uv, para elementos 3D.          
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>

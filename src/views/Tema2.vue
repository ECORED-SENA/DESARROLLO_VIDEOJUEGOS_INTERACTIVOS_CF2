<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1
        i Blueprint

    p.mb-5 Se basa en analizar, visualizar y presentar el diseño, por ejemplo, el personaje en posición frontal y otro en posición lateral, si se desea se puede hacer vista por la espalda, se utilizan unas líneas guías con la finalidad de que las alturas de las líneas del personaje concuerden, lo que facilita durante el momento de modelar en 3D el personaje, como se muestra a continuación.

    .row.mb-5
      .col-lg-1
      .col-lg-10.p-5(style="background-color:#D6F3F9")
        p.BorTit <b>Figura 2</b> <i>Blueprint Flynn</i>
        figure
          img(src='@/assets/curso/tema2/img01.png') 
          figcaption Nota. SENA (2021)
      .col-lg-1
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>

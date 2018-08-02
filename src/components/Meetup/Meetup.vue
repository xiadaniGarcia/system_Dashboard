<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="primary--text">{{ meetup.Nombre }}</h6>
          </v-card-title>
          <v-card-media
            :src="require('../../../images/timeline.png')"
            height="1000px"
          >

          </v-card-media>
          <v-card-text>
            <div class="info--text">{{ meetup.date | date }} - {{ meetup.Area }}</div>
            <div>{{ meetup.description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary" @click="createPDF">Generar PDF</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <div>

    </div>
  </v-container>
</template>

<script>
  import JsPDF from 'jspdf'
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    },
    methods: {
      createPDF () {
        let pdfName = 'ordenDeServicio'
        var doc = new JsPDF()
        doc.text('Este es un ejemplo de una orden de servicio ', 10, 10)
        doc.text('fue generada automáticamente por el programa ', 10, 50)
        doc.text('se recomienda proveer una plantilla con logotipo e informacion', 10, 90)
        doc.save(pdfName + '.pdf')
      }
    }
  }
</script>

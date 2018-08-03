<template>
  <v-container grid-list-md text-xs-center>
    <v-layout  row wrap >
      <div class="col-md-4 grid-margin stretch-card" v-for="meetup in meetups" :key="meetup.id">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{meetup.Nombre}}</h4>
            <p class="card-description">{{meetup.tipoMantenimiento}}</p>
            <!-- Dummy Modal Starts -->
            <div >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Se reportó la falla</p>
                  </div>
                  <div >
                    <button type="button" class="btn btn-gradient-primary">Editar</button>
                    <button type="button" class="btn btn-gradient-primary">Histo</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Dummy Modal Ends -->
            <!-- Modal starts -->
            <div class="text-center">
              <button @click="createPDF" type="button" class="btn btn-primary btn-sm" style=" background: linear-gradient(to right, #da8cff, #9a55ff);">Generar PDF<i class="mdi mdi-play-circle ml-1"></i></button>
            </div>
            <div class="modal fade" id="exampleModal-2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel-2" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel-2">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Modal body text goes here.</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-success">Submit</button>
                    <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- Modal Ends -->
          </div>
        </div>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
  import JsPDF from 'jspdf'
  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
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
      },
      showAlert () {
          // Use sweetalret2
        this.$swal({
          type: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 8000
        })
        this.$router.go('/meetups')
      }
    }
  }
</script>

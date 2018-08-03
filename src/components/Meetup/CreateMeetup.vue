<template>
  <v-container>
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Crea un ticket</h4>
        <form class="forms-sample" form @submit.prevent="onCreateMeetup">
          <div class="form-group">
            <label for="exampleFormControlSelect1">Selecciona el área al que pertenece</label>
            <select class="form-control form-control-lg" id="Area" v-model="Area"
                    required>
              <option>Quirófano 1</option>
              <option>Quirófano 2</option>
              <option>Quirófano Lasik</option>
              <option>Quirófano externo</option>
              <option>Consultorio 2</option>
              <option>Consultorio 3</option>
              <option>Consultorio 4</option>
              <option>Consultorio 5</option>
              <option>Consultorio 9</option>
              <option>Sala estudios</option>
              <option>OCT</option>
              <option>Campimetría</option>
              <option>Electrofisiología</option>
              <option>CEYE</option>
              <option>Subceye</option>
              <option>Biomédica</option>
              <option>Azotea</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Nombre del equipo</label>
            <input type="text" class="form-control" id="Nombre" placeholder="Nombre del equipo" v-model="Nombre"
                   required>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Descripción de la falla</label>
            <input style="height: 100px"
              type="text" class="form-control" id="descripcion" placeholder="Describa la falla" v-model="descripcion"
                   required>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Turno en que se presentó</label>
            <select class="form-control form-control-lg" id="turno" v-model="turno"
                    required>
              <option>Matutino</option>
              <option>Vespertino</option>
              <option>Nocturno</option>
            </select>
          </div>
          <v-layout row>

            <v-flex xs12 sm6 offset-sm1>
              <v-date-picker v-model="date"></v-date-picker>
            </v-flex>

            <v-flex xs12 sm3 >
              <v-time-picker v-model="time" format="24hr"></v-time-picker>

            </v-flex>

          </v-layout>
          <v-btn
            class="btn btn-gradient-primary mr-2"
            :disabled="!formIsValid"
            type="submit" v-on:click="showAlert">Levantar ticket</v-btn>
          <button class="btn btn-light">Cancel</button>
        </form>
      </div>
    </div>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        tipoMantenimiento: '',
        Area: '',
        Nombre: '',
        date: new Date(),
        time: new Date()
      }
    },
    computed: {
      formIsValid () {
        return this.Area !== '' &&
          this.Nombre !== ''
      },
      submittableDateTime () {
        const date = new Date(this.date)
        if (typeof this.time === 'string') {
          let hours = this.time.match(/^(\d+)/)[1]
          const minutes = this.time.match(/:(\d+)/)[1]
          date.setHours(hours)
          date.setMinutes(minutes)
        } else {
          date.setHours(this.time.getHours())
          date.setMinutes(this.time.getMinutes())
        }
        return date
      }
    },
    methods: {
      onCreateMeetup () {
        if (!this.formIsValid) {
          return
        }
        const meetupData = {
          tipoMantenimiento: 'Correctivo',
          Area: this.Area,
          Nombre: this.Nombre,
          date: this.submittableDateTime
        }
        this.$store.dispatch('createMeetup', meetupData)
        this.$router.push('/tickets')
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

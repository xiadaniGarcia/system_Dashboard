<template>
  <v-container>

          <div class="page-header">
            <h3 class="page-title">
              <span class="page-title-icon bg-gradient-primary text-white mr-2">
                <i class="mdi mdi-home"></i>
              </span>
              Dashboard
            </h3>
            <nav aria-label="breadcrumb">
              <ul class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">
                  <span></span>Overview
                  <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                </li>
              </ul>
            </nav>
          </div>
          <div class="row">
            <div class="col-md-4 stretch-card grid-margin">
              <div class="card bg-gradient-danger card-img-holder text-white">
                <div class="card-body">
                  <img src="../../images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image"/>
                  <h4 class="font-weight-normal mb-3">Ordenes de Servicio del mes
                    <i class="mdi mdi-chart-line mdi-24px float-right"></i>
                  </h4>
                  <h1 class="mb-5" style="margin-bottom: 3rem !important; text-align: center; font-size: 4rem;">12</h1>
                </div>
              </div>
            </div>
            <div class="col-md-4 stretch-card grid-margin">
              <div class="card bg-gradient-info card-img-holder text-white">
                <div class="card-body">
                  <img src="../../images//dashboard/circle.svg" class="card-img-absolute" alt="circle-image"/>
                  <h4 class="font-weight-normal mb-3">Ordenes Activas
                    <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                  </h4>
                  <h1 class="mb-5" style="margin-bottom: 3rem !important; text-align: center;font-size: 4rem;">4</h1>
                </div>
              </div>
            </div>
            <div class="col-md-4 stretch-card grid-margin">
              <div class="card bg-gradient-success card-img-holder text-white">
                <div class="card-body">
                  <img src="../../images//dashboard/circle.svg" class="card-img-absolute" alt="circle-image"/>
                  <h4 class="font-weight-normal mb-3">Área con más tickets levantados
                    <i class="mdi mdi-diamond mdi-24px float-right"></i>
                  </h4>
                  <h2 class="mb-5">Quirófano 2</h2>
                  <h6 class="card-text">10% del total</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-7 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <div class="clearfix">
                    <h4 class="card-title float-left">Tickets por área y por mes</h4>
                    <div id="visit-sale-chart-legend" class="rounded-legend legend-horizontal legend-top-right float-right"></div>
                  </div>
                  <img src="../../images//c1.png" class="mr-2" alt="image">
                </div>
              </div>
            </div>
            <div class="col-md-5 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <!-- TODO: Change layouts: Falla de equipo, error de usario , mantenimieto programado-->
                  <h4 class="card-title">Causa de los tickets</h4>
                  <img src="../../images//c2.png" class="mr-2" alt="image">
                  <div id="traffic-chart-legend" class="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                </div>
              </div>
            </div>
          </div>
    <!--TODO: Add scroll to view more tickets-->
          <div class="row">
            <div class="col-12 grid-margin">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Tickets recientes</h4>
                  <div class="table-responsive">
                    <table class="table" v-for="meetup in meetups" :key="meetup.id">
                      <thead>
                      <tr>
                        <th>
                          Asignado
                        </th>
                        <th>
                          Área
                        </th>
                        <th>
                          Estatus
                        </th>
                        <th>
                          Fecha de modificación
                        </th>
                        <th>
                          ID
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>
                          <img src="../../images//faces/face1.jpg" class="mr-2" alt="image">
                          David Robles (Biomédico)
                        </td>
                        <td>
                          {{ meetup.Area }}
                        </td>
                        <td>
                          <label class="badge-gradient-warning">Pendiente</label>
                        </td>
                        <td>
                          {{ meetup.date }}
                        </td>
                        <td>
                          WD-12345
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Gastos</h4>
                  <div class="d-flex">
                    <div class="d-flex align-items-center mr-4 text-muted font-weight-light">
                      <i class="mdi mdi-account-outline icon-sm mr-2"></i>
                      <span>Departamento Biomédica</span>
                    </div>
                    <div class="d-flex align-items-center text-muted font-weight-light">
                      <i class="mdi mdi-clock icon-sm mr-2"></i>
                      <span>Actualiizado Agosto 2018</span>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-7 pr-1">
                      <img src="../../images//graphs/gastos.jpg" class="mb-2  rounded" style="text-align: center" alt="image">
                    </div>
                    <div class="col-md-4 stretch-card grid-margin">
                      <div class="card bg-gradient-success card-img-holder text-white">
                        <div class="card-body">
                          <img src="../../images//dashboard/circle.svg" class="card-img-absolute" alt="circle-image"/>
                          <h4 class="font-weight-normal mb-3">Gastos innecesarios mensuales
                            <i class="mdi mdi-diamond mdi-24px float-right"></i>
                          </h4>
                          <h1 style="text-align: center;" class="mb-5">12,500</h1>
                          <h6 class="card-text">20% menos respecto al anterior</h6>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">

                    </div>
                    <div class="col-md-8">
                      <img src="../../images//graphs/gastosAño.png" class="mb-2  rounded" style="text-align: center" alt="image">
                    </div>
                    <div class="col-md-4">
                    </div>
                  </div>
                  <div class="d-flex mt-5 align-items-top">
                    <img src="../../images//faces/face3.jpg" class="img-sm rounded-circle mr-3" alt="image">
                    <div class="mb-0 flex-grow">
                      <h5 class="mr-2 mb-2">Departamento de biomédica</h5>
                      <p class="mb-0 font-weight-light">Los resultados indican una disminución cosiderable en los costos no necesarios.</p>
                    </div>
                    <div class="ml-auto">
                      <i class="mdi mdi-heart-outline text-muted"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Estatus de proyectos</h4>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                      <tr>
                        <th>
                          #
                        </th>
                        <th>
                          Nombre
                        </th>
                        <th>
                          Fecha de entrega
                        </th>
                        <th>
                          Progreso
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>
                          1
                        </td>
                        <td>
                          Realizar inventorio
                        </td>
                        <td>
                          May 15, 2018
                        </td>
                        <td>
                          <div class="progress">
                            <div class="progress-bar bg-gradient-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          2
                        </td>
                        <td>
                          Crear formato de ordenes de servicio
                        </td>
                        <td>
                          Jul 01, 2019
                        </td>
                        <td>
                          <div class="progress">
                            <div class="progress-bar bg-gradient-danger" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          3
                        </td>
                        <td>
                          Llenar stock de desechables
                        </td>
                        <td>
                          Apr 12, 2019
                        </td>
                        <td>
                          <div class="progress">
                            <div class="progress-bar bg-gradient-warning" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          4
                        </td>
                        <td>
                          Remodelación del departamento de biomédica
                        </td>
                        <td>
                          May 15, 2019
                        </td>
                        <td>
                          <div class="progress">
                            <div class="progress-bar bg-gradient-primary" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          5
                        </td>
                        <td>
                          Seguir lineamientos de la NOM
                        </td>
                        <td>
                          May 03, 2020
                        </td>
                        <td>
                          <div class="progress">
                            <div class="progress-bar bg-gradient-danger" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          5
                        </td>
                        <td>
                          Capacitación del departamento de enfermería
                        </td>
                        <td>
                          Jun 05, 2018
                        </td>
                        <td>



                          <div class="progress">
                            <div class="progress-bar bg-gradient-info" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
    <div class="row">
      <div class="col-md-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">

            <img src="../../images/calendar.png" class="mr-2" style="text-align: center" alt="image">
          </div>
        </div>
      </div>
    </div>

        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
          <div class="d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2018. All rights reserved.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i class="mdi mdi-heart text-danger"></i></span>
          </div>
        </footer>
        <!-- partial -->
      <!-- main-panel ends -->


  </v-container>
  <!--
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2" v-if="!loading">
      <v-flex xs12>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap  class="mt-2">
      <v-flex xs12 class="text-xs-center">
       <p>Join our awesome meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>-->
</template>

<script>

  export default {
    computed: {
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>

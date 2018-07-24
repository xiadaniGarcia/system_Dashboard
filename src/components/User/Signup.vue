<template>
  <div class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <img src="../../../images/sanAngel.png">
                </div>
                <v-layout row v-if="error">
                  <v-flex xs12 sm6 offset-sm3>
                    <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                  </v-flex>
                </v-layout>

                <h1>San Angel</h1>
                <h6 class="font-weight-light"> Centro oftalmológico. Bendición para tus ojos</h6>
                <form class="pt-3" @submit.prevent="onSignup">
                  <div class="form-group">
                    <input type="email" v-model="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="Correo" required>
                  </div>
                  <div class="form-group">
                    <input type="password" v-model="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Contraseña" required>
                  </div>
                  <div class="form-group">
                    <input  name="confirmPassword"
                            label="Confirm Password"
                            v-model="confirmPassword"
                            type="password"
                            :rules="[comparePasswords]" class="form-control form-control-lg" id="confirmPassword" placeholder="Confirmar contraseña" required>
                  </div>




                  <v-btn type="submit" :disabled="loading" :loading="loading"  class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">
                    Crear cuenta
                    <span slot="loader" class="custom-loader" >
                        <v-icon light>cached</v-icon>
                       </span>
                  </v-btn>


                  <!--      <div class="mt-3">
                          <a class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" type="submit" @onclick.prevent="onSignin">SIGN IN</a>
                        </div>-->

                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>

  </div>




<!--

  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignup">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      v-model="confirmPassword"
                      type="password"
                      :rules="[comparePasswords]"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" :disabled="loading" :loading="loading">
                      Sign up
                       <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>-->
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
      },
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignup () {
        this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>
<style scoped>/* "Scoped" attribute limit the css to this component only */

p a{
  text-decoration: underline;
  cursor: pointer;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

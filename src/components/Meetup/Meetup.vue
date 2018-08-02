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
            <v-btn class="primary">Update</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <div>

    </div>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id)
      }
    }
  }
</script>

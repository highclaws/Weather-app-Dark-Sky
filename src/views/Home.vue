<template>

  <div class="home">
    <h1>Sky API</h1> 
    <p>The easiest, most advanced, weather API on the web.</p>
    <!-- <p>{{forecast}}</p> -->
  </div>
</template>

<script>

import API from '@/lib/API';
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      location: '',
      address: '',
      forecast: null,
      icons: {
        'clear-day': '😀', 
        'clear-night':'😃' , 
        'rain':'😄', 
        'snow':'😡', 
        'sleet':'😅', 
        'wind':'🙂', 
        'fog':'😇', 
        'cloudy':'😤', 
        'partly-cloudy-day':'🤗',
        'partly-cloudy-night':'🐳'

      }
    };
  },
  mounted (){
      this.loadWeather('45.7578', '4.832')
  }, 
  methods: {
    loadWeather(lat, lng) {
      API.getAdress(lat, lng).then(result => {
        this.address = result;
        console.log(result);
      });
        API.getForecast(lat, lng).then(result => {
        this.forecast = result;
        console.log(result);
      });

    },
    updateLocation() {
      API.getCoordinates(this.location).then(result => {
      this.loadWeather(result.latitude, result.longitude);
        console.log(result);

      });
    },
  }

};
</script>
<style>
body {
  font-size: 2em;
}
  p {
    color:white;
  }
  .emoji {
      font-size: 2em;

  }
</style>


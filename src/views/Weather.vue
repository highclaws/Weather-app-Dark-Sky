<template>
  <div class="home">
    <div class="row">      
      <div class="col-8 offset-2 text-center"> 
        <div class="input-group mb-3">
          <input v-model="location" type="text" class="form-control" placeholder="Enter Location">
          <div class="input-group-append">
            <button @click="updateLocation" class="btn btn-outline-secondary" type="button">Search</button>          
            </div>  
        </div>
      </div>
      <div class="col-8 offset-2 text-center" v-if="forecast"> 
        <div class="card text-white bg-primary mb-3">
            <div class="card-header">{{address}}</div>
            <div class="card-body">
              <h4 class="card-title">{{forecast.currently.summary}}</h4>
              <div  class="card-text icon-temp">
                <span class="emoji">{{icons[forecast.currently.icon]}} {{forecast.currently.temperature}} ° celsius</span>

              </div>
              <div class="card-text">
                <p> {{forecast.currently.precipProbability}} % chance de Précipitations</p>
              </div>
            </div>
        </div>

      </div>
      <div class="col-8 offset-2">
        <iframe
          id="map-embed-iframe"
          frameborder="0"
          height="500px"
          width="100%"
          :src='embedURL'></iframe>
      </div>
    </div>

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
      embedURL: '',
      location: localStorage.location || '',
      address: localStorage.address || '',
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
        this.loadWeather(localStorage.lat || '45.7578', localStorage.lng || '4.832');
  }, 
  methods: {
    loadWeather(lat, lng) {
      localStorage.lat = lat;
      localStorage.lng = lng;

      this.embedURL = API.getEmbedURL(lat, lng);

      API.getAdress(lat, lng).then(result => {
        this.address = [result.name, result.street].join(' ');
        localStorage.address = this.address;
      });
        API.getForecast(lat, lng).then(result => {
        this.forecast = result;
        console.log(result);
      });

    },
    updateLocation() {
            localStorage.location = this.location;
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


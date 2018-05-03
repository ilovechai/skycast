class Storage{
    constructor(t_lat,t_lng){
      this.lat;
      this.lng;
      this.defaultlat=t_lat;
      this.defaultlng=t_lng;
    }

    getLocationData(){
      if(localStorage.getItem('lat')==null){
        this.lat = this.defaultlat;
      }else{
        this.lat = localStorage.getItem('lat');
      }

      if(localStorage.getItem('lng')==null){
        this.lng = this.defaultlng;
      }else{
        this.lng = localStorage.getItem('lng');
      }

      return{
        lat: this.lat,
        lng: this.lng
      };
    }

    setLocationData(t_lat,t_lng){
      localStorage.setItem('lat',t_lat);
      localStorage.setItem('lng',t_lng);
    }
}
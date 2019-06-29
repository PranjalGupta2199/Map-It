import config from "react-global-configuration";

function configuration (){
  config.set({
    backend : `http://localhost:5000`,
    geoserver: `http://localhost:8080/geoserver`,
    geowebcache: `http://localhost:8080/geowebcache`,
    endpoints:{
        map: '/preview',
    },
    'isLoggedIn' : false,
  })
}

export default configuration;

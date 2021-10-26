if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
    //console.log('Uso de SW ejecutando');
        .then(registration => console.log("Service Worker registrado con alcance: ", registration.scope))
        .catch(err => console.log("Falla en el registro del Service Worker", err));
}


caches.open("Cache V1")
.then(cache=>{
    // Guardamos los archivos
    cache.addAll([
        './index.html',
        './app.js',
        './folder/data.json',
        './Logo.jpg'
    ])
    // Buscamos todos los archivos en el cache
    cache.keys().then(res=>{
        console.log(res);
    })
    //Abrimos todos los archivos del cache
    cache.matchAll().then(res=>{
        return res[3].blob();
    })
    .then(res=>{
        document.querySelector("#imagenCache").src = URL.createObjectURL(res);
    })
    
    
});
"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((e=>{console.log("service-worker registed")})).catch((e=>{console.log("service-worker register error")}))}));
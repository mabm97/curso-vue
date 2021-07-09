if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").then(
        registro => console.log("Registro de service worker exitoso")
    ).catch(
        err => console.log("Service worker error ", err)
    )
} else {

}
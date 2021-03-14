// JS Goes here - ES6 supported
if('serviceWorker' in navigator) {
        window.addEventListiner('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then((registration) => {
                    console.log(`service worker registered succesfully ${registration}`)
                })
                .catch((err) => {
                    console.log(`Error registring ${err}`)
                })
        })
    } else {
        console.log(`Service worker is not supported in this browser.`)
    }
import "./css/main.css";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

const { exec }        = require("child_process");
const { clear }       = require("console");
const { setInterval } = require("timers");
const commandExists   = require("./src/commandExists");

(async () => {

let pauseInterval   = 25 // Min
let browser         = process.argv[2]
let timerToInterval = 60 * pauseInterval

try {
    
    // Exit if browser not exists
    if( ! await commandExists(browser) ) return 

    // Run Program
    setInterval(() => {

        // Display Info
        clear()
        console.log(`Pause in ${timerToInterval--} seg`)

        if( isInterval = timerToInterval <= 0 ) {

            exec(`${browser} ./index.html`, error => {
                if (error) console.log(`error: ${error.message}`)
            })
            
            // Reset clock
            isInterval      = false
            timerToInterval = 60 * pauseInterval
        }

    }, 1000)

} catch (error) {
    console.log(error)
}

})()
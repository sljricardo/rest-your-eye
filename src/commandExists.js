const { exec }        = require("child_process");

module.exports = (command) => {
    return new Promise((resolve, reject) => {
        exec(`command -v ${command}`, (error) => {
            if( error ) reject("Command not exists")
            resolve(true)
        })
    })
}
import express from 'express'
const app = express()

const porta = 3000

app.use(express.static('public'))

app.listen(porta, () => {
    console.log(`Endereço local => http://localhost:${porta}`)
})

import os from 'os'
const interfaces = os.networkInterfaces()
for (let idx in interfaces) {
    for (let info of interfaces[idx]) {
        if (info.family === 'IPv4' && !info.internal){
            console.log(`Endereço c/ IP => http://${info.address}:${porta}`)
        }
    }
}
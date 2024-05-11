import express from "express"

import resolveIP from "./using Puppeteer/01 beginning/01.js"

const app = express()

app.use("/ip/:ip", async(req, res) => {
    try{
        if (!req.params.ip){
            throw new Error("IP Address is required")
            return
        }
        const result = await resolveIP(req.params.ip)

        res.status(200).json(result)


    }catch(e){
        res.status(400).send(e.message)
    }
})

app.use("*", (req, res) => {
    res.send("send Request to /ip/:ip-address<br> Example: /ip/8.8.8.8")
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
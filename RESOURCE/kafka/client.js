import {Kafka} from "kafkajs"

const kafka = new Kafka({
    clientId:"my-app",
    brokers:["192.168.1.6:9092"]
})


export {kafka}
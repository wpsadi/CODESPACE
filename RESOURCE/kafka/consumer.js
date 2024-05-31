import { kafka } from "./client.js";

async function init() {
    const groupId = "first";
    const consumer = kafka.consumer({ groupId: groupId });
    await consumer.connect();
  
    await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });
  
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log(
          `${groupId}: [${topic}]: PART:${partition}:`,
          message.value.toString()
        );
      },
    });
}
  
init();
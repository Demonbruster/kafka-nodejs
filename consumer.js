import kafkaInstance from "./kafkaInstance.js";

consumer();

async function consumer () {
  try{

    const consumer = kafkaInstance.consumer({
      groupId: 'grp1'
    });
    
    await consumer.connect().then(()=> {
      console.log('Consumer connected!!!')
    })

    await consumer.subscribe({
      topic: "notifications",
      fromBeginning: true,
    })

    await consumer.run({
      eachMessage: async res => {
        console.log(`message: ${res.message.value}, partition: ${res.partition}`)
      }
    })
    
  } catch (ex) {
    console.error(ex)
  }

}
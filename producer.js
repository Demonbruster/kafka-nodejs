import kafkaInstance from "./kafkaInstance.js";
const message = process.argv[2];

(async () => {
	try {
		const producer = kafkaInstance.producer();

		await producer.connect().then(() => {
			console.log("kafka producer connected!!!");
		});

		// alert - info
    const partition = message.includes('alert') ? 0 : 1
		await producer.send({
      topic: "notifications",
      messages: [{
        value: message,
        partition
      }]
    }).then(res => {
      console.log(`msg sent: ${JSON.stringify(res)}`)
    })

		producer.disconnect();
	} catch (ex) {
		console.error(`Something went wrong ${ex}`);
	} finally {
		process.exit(0)
	}

})();

import { Kafka } from "kafkajs";

const kafkaInstance = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:29092']
})

export default kafkaInstance;

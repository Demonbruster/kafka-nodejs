## Sending notification in real time with the help of Kafka

### Setup in your local
- Make sure you have install docker in your machine
- `docker-compose up` to create zookeeper and kafka (if you don't want to see logs your terminal use `docker-compose up -d`)

### How to use it
- run topic `node topic.js`
- run consumer `node consumer.js`
- open new terminal and run producer `node producer {args}` I have special condition for partitions; if your args has alert it will be partition 0 other wise partition 1
- you can open new terminal then run another consumer and then produce and then check your consumers🎉🎉🎉

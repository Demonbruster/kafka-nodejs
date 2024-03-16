import kafkaInstance from "./kafkaInstance.js";

const fn = async () => {
  try{

    const admin = kafkaInstance.admin()
    
    await admin.connect().then(()=> {
      console.log('kafka admin connected!!!')
    }).catch(er => {
      console.error(er)
    })
    
    // alert - info
    await admin.createTopics({
      topics: [{
        topic: 'notifications',
        numPartitions: 2
      }]
    }).then(()=> console.log('topic created'))
    
    admin.disconnect()

  } catch (ex) {
    console.error(`Something went wrong ${ex}`)
  } finally {
    process.exit(0);
  }
};

fn();

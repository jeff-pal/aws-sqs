const logger = require('node-color-log');
import AWSSQS from "../AWSSQS";

(async function(): Promise<any> {
    const args = process.argv.slice(2);

    if(args.length < 2) {
        logger.color('red').log('Missing arguments!\nUsage: yarn ts-node deleteMessage.ts <queueUrl> <receiptHandle>');
        return;
    }
    
    const [ QueueUrl, ReceiptHandle ] = args;

    const params = {
        QueueUrl,
        ReceiptHandle,
    }
    const deletedMessage = await new AWSSQS().deleteMessage(params);
    console.log(deletedMessage);
})();

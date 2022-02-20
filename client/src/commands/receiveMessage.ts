import logger from "node-color-log";
import AWSSQS from "../AWSSQS";

(async function(): Promise<any> {
    const args = process.argv.slice(2);

    if(args.length < 1) {
        logger.color('red').log("Missing arguments!\nUsage: yarn ts-node receiveMessage.ts <queueUrl>");
        return;
    }

    const [ QueueUrl ] = args;

    const receivedMessage = await new AWSSQS().receiveMessage({
        QueueUrl,
        AttributeNames: ["All"],
        MessageAttributeNames: ["All"],
    });
    console.log(receivedMessage);
})();

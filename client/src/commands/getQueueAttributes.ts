import logger from "node-color-log";
import AWSSQS from "../AWSSQS";

(async function(): Promise<any> {
    const args = process.argv.slice(2);

    if(args.length < 1) {
        logger.color('red').log("Missing arguments!\nUsage: yarn ts-node getQueueAttributes.ts <queueUrl>");
        return;
    }
    const [ QueueUrl ] = args;

    const attributes = await new AWSSQS().getQueueAttributes({
        QueueUrl,
        AttributeNames: ["All"],
    });
    console.log(attributes);
})();


import logger from "node-color-log";
import AWSSQS from "../AWSSQS";

(async function(): Promise<any> {
    const args = process.argv.slice(2);

    if(args.length < 1) {
        logger.color('red').log("Missing arguments!\nUsage: yarn ts-node sendMessage.ts <queueUrl>");
        return;
    }

    const [ QueueUrl ] = args;
console.log(QueueUrl);

    const params = {
        QueueUrl,
        MessageBody: JSON.stringify({
            message: "Hello World 2",
        }),
        MessageAttributes: {
            "my-attribute": {
                DataType: "String",
                StringValue: "My First SQS Message",
            },
        },
    }

    const sentMessage = await new AWSSQS("us-east-1").sendMessage(params);
    console.log(sentMessage);
})();

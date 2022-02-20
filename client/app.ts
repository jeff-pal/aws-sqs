import SQSHelper from "./src/SQSHelper";

async function app() {
    const list = await new SQSHelper("us-east-1").listQueues();
    console.log(list);
}

app();
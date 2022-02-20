import {
    SQSClient,
    ListQueuesCommand,
    GetQueueAttributesCommand,
    SendMessageCommand,
    ReceiveMessageCommand,
    DeleteMessageCommand,
} from '@aws-sdk/client-sqs';

export default class AWSSQS {
    client: SQSClient;

    constructor(region: string = 'us-east-1') {
        this.client = new SQSClient({ region });
    }

    listQueues() {
        return new Promise((resolve, reject) => {
            this.client.send(new ListQueuesCommand({}), (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        }
        );
    }

    getQueueAttributes(params) {
        return new Promise((resolve, reject) => {
            this.client.send(new GetQueueAttributesCommand(params), (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        }
        );
    }

    sendMessage(params) {
        return new Promise((resolve, reject) => {
            this.client.send(new SendMessageCommand(params), (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        }
        );
    }

    receiveMessage(params) {
        return new Promise((resolve, reject) => {
            this.client.send(new ReceiveMessageCommand(params), (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        }
        );
    }

    deleteMessage(params) {
        return new Promise((resolve, reject) => {
            this.client.send(new DeleteMessageCommand(params), (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        }
        );
    }
}

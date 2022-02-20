import SQSClient from 'aws-sdk/clients/sqs';

export default class SQSHelper {
    client: SQSClient;

    constructor(region: string) {
        this.client = new SQSClient({ region });
    }

    listQueues() {
        return new Promise((resolve, reject) => {
            this.client.listQueues({}, (err, data) => {
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

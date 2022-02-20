import AWSSQS from "../AWSSQS";

(async function(): Promise<any> {
    const list = await new AWSSQS().listQueues();
    console.log(list);
})();


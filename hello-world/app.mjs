/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

// yo, I removed context argument because
// Jesse say a bunch of Lambda calculus boring things
// another code change

export const lambdaHandler = async () => {
    try {
        console.log("Yo, hello world running!")
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            }),
            'headers': { 'Content-Type': 'application/json' }
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};

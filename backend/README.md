# Serverless Backend

To run locally

1. `yarn install` to install the dependecies.
2. set up AWS credentials as shown in https://serverless.com/framework/docs/providers/aws/guide/credentials/
3. `serverless deploy` to deploy all of the lambda functions in your AWS account. You will see the endpoint printed after the deployment.
4. `serverless logs -f catsPlease -t` to stream the cloudwatch logs locally.(run this in a separate terminal window).
5. hit the endpoint that you saw during deployment to trigger the lambda or run `serverless invoke -f catsPlease` to invoke the lambda from your machine.

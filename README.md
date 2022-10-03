
# NestJS AWS

## Setup the workspace

* Checkout the Repository

* Install the Serverless, AWS & NX as global packages

``` bash
  npm i serverless aws-sdk nx --location=global
```

* Install the NPM Modules

``` bash
npm i
```

## Running the application locally

* Run the accounts & Users app build in watch mode

``` bash
nx run accounts-app:build
nx run users-app:build
```

* Run the Serverless in offline mode, this would serve the accounts & users functions.
```
npm run sls:offline
```

## Deploy the application to AWS

* Configure the AWS credentials in local with below script by providing the credentials.
``` bash
  aws configure
```

* The user created should have the below permissions in the AWS
    * CloudWatch Full access
    * CloudFormation Full Access
    * S3 Bucket full access
    * IAM Role full access
    * API Gateway full access
    
* Deploy the application using the Serverless
``` bash
sls deploy --verbose

```

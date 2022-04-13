# Twilio Business Hours

This Function checks if current time is within business hours or not.

## Environment variables

This Function expects the following environment variables set:

| Variable            | Meaning                           | Required |
| :------------------ | :-------------------------------- | :------- |
| `DEFAULT_TIME_ZONE_COUNTRY` | A country to use for time zone checking | No      |
| `DEFAULT_TIME_ZONE_CITY` | A city to use for time zone checking | No      |
| `DEFAULT_OPEN_HOUR` | An openning hour to use for buisness hours checking | No      |
| `DEFAULT_CLOSE_HOUR` | A closing hour to use for buisness hours checking | No      |

## Parameters

| Parameter            | Meaning                           | Required | Default |
| :------------------ | :-------------------------------- | :------- | :------- |
| `country` | A country to use for time zone checking | No      | Australia      |
| `city` | A city to use for time zone checking | No      | Sydney      |
| `openHour` | A number to use for openning hour checking | No      | 0      |
| `closeHour` | A number to use for clossing hour checking | No      | 12      |

## Start the application locally

1. Install the packagaes

```shell
npm ci
```

2. Install [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart#install-the-twilio-cli)

```
brew tap twilio/brew && brew install twilio
```

3. Install [Serverless Plugin](https://www.twilio.com/docs/twilio-cli/quickstartt#install-the-serverless-plugin)

```
twilio plugins:install @twilio-labs/plugin-serverless
```

4. Start the server locally with the Serverless Plugin:

```
twilio serverless:start
```

5. Open the web page at https://localhost:3000/index.html to test the app

---

## Deploy the application

Deploy your functions and assets with the following command. 

```shell
twilio serverless:deploy --environment=development --env=.env.development
```

ℹ️ Note: you must run the commands from inside your project folder. [More details in the docs.](https://www.twilio.com/docs/labs/serverless-toolkit)
---

## Testing

You can use the FUNCTION with/without parameters, if parameters are not set, then the values will be used from the ENV file.

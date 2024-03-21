import { APIGatewayProxyEventV2 } from "aws-lambda";

export const Signup = async (event: APIGatewayProxyEventV2) => {
  console.log("Signup", event);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    },
    body: JSON.stringify({
      message: "response from Signup",
      data: {},
    }),
  };
};

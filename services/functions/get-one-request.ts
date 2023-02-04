import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { requestCalls } from '../core/request';

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const clientId = event.pathParameters?.client_id;

  if (!clientId) return { statusCode: 400, body: JSON.stringify({ error: true }) };

  const request = await requestCalls(+clientId);

  if (!request) return { statusCode: 404, body: JSON.stringify({ error: true }) };

  return {
    statusCode: 200,
    body: JSON.stringify(request.api_calls)
  };
};

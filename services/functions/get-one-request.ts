import { APIGatewayProxyEvent } from 'aws-lambda';
import { requestCalls } from '../core/request';

export const handler = async (event: APIGatewayProxyEvent) => {
  const clientId = event.pathParameters?.client_id;

  if (!clientId) return { statusCode: 400, body: JSON.stringify({ error: true }) };

  const total = await requestCalls(+clientId);

  if (!total) return { statusCode: 404, body: JSON.stringify({ error: true }) };

  return total;
};

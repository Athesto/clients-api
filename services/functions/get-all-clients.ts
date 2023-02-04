import { APIGatewayProxyHandlerV2 } from 'aws-lambda';
import { getAllClients } from '../core/client';

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const clients = await getAllClients();

  return {
    statusCode: 200,
    body: JSON.stringify(clients)
  };
};

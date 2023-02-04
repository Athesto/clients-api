import { APIGatewayProxyEvent } from 'aws-lambda';
import { getAllClients } from '../core/client';

export const handler = async (event: APIGatewayProxyEvent) => {
  const clients = await getAllClients();

  return clients;
};

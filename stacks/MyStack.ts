import { Api as ApiGateway, RDS, StackContext } from '@serverless-stack/resources';

export function MyStack({ stack }: StackContext) {
  const cluster = new RDS(stack, 'Cluster', {
    engine: 'postgresql11.13',
    defaultDatabaseName: 'CounterDB',
    migrations: 'services/migrations'
  });

  const api = new ApiGateway(stack, 'api', {
    defaults: {
      function: {
        bind: [cluster]
      }
    },
    routes: {
      'GET /clients': 'functions/get-all-clients.handler',
      'GET /requests/{client_id}': 'functions/get-one-request.handler',
      'POST /requests/{client_id}': 'functions/increment-request.handler'
    }
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
    SecretArn: cluster.secretArn,
    ClusterIdentifier: cluster.clusterIdentifier
  });

  return api;
}

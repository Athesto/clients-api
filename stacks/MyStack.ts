import { Api as ApiGateway, RDS, StackContext } from '@serverless-stack/resources';

export function MyStack({ stack }: StackContext) {
  const db = new RDS(stack, 'Cluster', {
    engine: 'postgresql11.13',
    defaultDatabaseName: 'clients',
    migrations: 'services/migrations',
    types: 'services/core/sql.generated.ts'
  });

  const api = new ApiGateway(stack, 'api', {
    defaults: {
      function: {
        bind: [db]
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
    SecretArn: db.secretArn,
    ClusterIdentifier: db.clusterIdentifier
  });

  return api;
}

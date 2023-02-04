import { Api, StackContext } from '@serverless-stack/resources';

export function MyStack({ stack }: StackContext) {
  const api = new Api(stack, 'api', {
    routes: {
      'GET /clients': 'functions/get-all-clients.handler',
      'GET /requests/{client_id}': 'functions/get-one-request.handler',
      'POST /requests/{client_id}': 'functions/increment-request.handler'
    }
  });
  stack.addOutputs({
    ApiEndpoint: api.url
  });
}

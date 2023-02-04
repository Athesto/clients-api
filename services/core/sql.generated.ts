export interface Database {
  clients: Clients;
  requests: Requests;
}

export interface Clients {
  id: number;
  name: string;
}

export interface Requests {
  client_id: number;
  api_calls: number;
}

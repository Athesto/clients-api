import { ColumnType } from 'kysely';

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Clients {
  id: Generated<number>;
  name: string;
}

export interface Requests {
  api_calls: number | null;
  client_id: number;
  id: Generated<number>;
}

export interface Database {
  clients: Clients;
  requests: Requests;
}

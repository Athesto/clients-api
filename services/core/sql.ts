import { RDS } from '@serverless-stack/node/rds';
import { RDSDataService } from 'aws-sdk';
import { Kysely } from 'kysely';
import { DataApiDialect } from 'kysely-data-api';

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

export const db = new Kysely<Database>({
  dialect: new DataApiDialect({
    mode: 'postgres',
    driver: {
      database: RDS.Cluster.defaultDatabaseName,
      secretArn: RDS.Cluster.secretArn,
      resourceArn: RDS.Cluster.clusterArn,
      client: new RDSDataService()
    }
  })
});

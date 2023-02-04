import { RDS } from '@serverless-stack/node/rds';
import { RDSDataService } from 'aws-sdk';
import { Kysely } from 'kysely';
import { DataApiDialect } from 'kysely-data-api';
import { Database } from './sql.generated';

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

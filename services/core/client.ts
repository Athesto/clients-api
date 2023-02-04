import { db } from './sql';

export async function getAllClients() {
  return db.selectFrom('clients').selectAll();
}

import { db } from './sql';

export async function requestCalls(client_id: number) {
  const record = await db
    .selectFrom('requests')
    .select('api_calls')
    .where('client_id', '=', client_id)
    .executeTakeFirst();

  if (!record) return createRequest(client_id);

  return record.api_calls;
}

export async function addRequestCall(client_id: number) {
  const record = await db
    .selectFrom('requests')
    .select('api_calls')
    .where('client_id', '=', client_id)
    .executeTakeFirst();

  if (!record) return createRequest(client_id);

  let total = record.api_calls;

  await db
    .updateTable('requests')
    .set({ api_calls: ++total })
    .where('client_id', '=', client_id)
    .execute();

  return total;
}

async function createRequest(client_id: number) {
  const record = await db
    .insertInto('requests')
    .values({ client_id, api_calls: 1 })
    .returning('api_calls')
    .executeTakeFirst();

  return record?.api_calls;
}

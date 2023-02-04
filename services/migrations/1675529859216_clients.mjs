import { Kysely } from "kysely";

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
    await db.schema.createTable('clients')
        .addColumn("id", 'serial', (col) => col.primaryKey())
        .addColumn("name", "text", (col) => col.notNull())
        .execute();
    await db.schema.createTable('requests')
        .addColumn("id", 'serial', (col) => col.primaryKey())
        .addColumn("client_id", 'integer', (col) => col.references('clients').notNull())
        .addColumn("api_calls", "integer", (col) => col.notNull())
        .execute();
    await db.insertInto('clients').values({ name: 'Doug' }, { name: 'David' }).execute()
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
}
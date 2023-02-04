import { Kysely } from "kysely";

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
    await db.insertInto('clients').values({ name: 'Doug' }).values({ name: 'David' }).execute()
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
}
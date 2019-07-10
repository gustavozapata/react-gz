import Db from "./Db";

let users;

export default class PollDao {
  static async injectDB(conn) {
    console.info("2. first line in PollDao.injectDB");
    try {
      users = await conn.db("reactgz").collection("users");
    } catch (e) {
      console.error(`no se pudo establecer conexion en PollDao: ${e}`);
    }
    console.info("3. last line in PollDao.injectDB");
  }

  static async getUser(email) {
    return await users.findOne({ email });
  }

  static async addPoll(poll) {
    try {
      await users.insertOne(
        {
          name: poll
        },
        { writeConcern: { w: "majority" } }
      );
      return { success: true };
    } catch (e) {
      console.error(`Error al intentar anadir nuevo poll, ${e}.`);
      return { error: e };
    }
  }
}

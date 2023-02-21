class Repository {
    knex: any;
    constructor() {
        try {
            this.knex = require('knex')({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export { Repository };
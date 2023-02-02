import { Sequelize } from 'sequelize-typescript';
import { Constant } from 'src/commons/contants.class';
import { People } from "../../api/people/model/people.entity";
import { Planet } from "../../api/planet/model/planet.entity";
import { populateDB, watchDB } from './database.function';
import { Logging } from "../../api/logging/model/logging.entity";

export const databaseProviders = [
    {
        provide: Constant.DATABASE,
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'sqlite',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'password',
                database: 'holafly',
            });
            sequelize.addModels([People, Planet, Logging]);
            sequelize.options.logging = false;
            await sequelize.sync();
            populateDB(sequelize);
            watchDB(sequelize);
            return sequelize;
        },
    },
];

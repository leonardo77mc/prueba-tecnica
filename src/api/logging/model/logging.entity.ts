import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Logging extends Model {
    @Column action: string;
    @Column header: string;
    @Column ip: string;
}
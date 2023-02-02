import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Planet extends Model {
    @Column name: string;
    @Column gravity: string;
}
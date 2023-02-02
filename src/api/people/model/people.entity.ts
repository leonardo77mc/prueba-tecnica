import { Column, Model, Table } from "sequelize-typescript";

@Table
export class People extends Model {

    @Column
    name: string;
    @Column
    mass: number;
    @Column
    height: number;
    @Column
    homeworld_name: string;
    @Column
    homeworld_id: string;
}
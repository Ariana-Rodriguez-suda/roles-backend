import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ingrediente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precio: number;

    @Column('decimal', { precision: 10, scale: 2, nullable: true })
    unidad: number;

    @Column('decimal', { precision: 10, scale: 2, nullable: true, default: 0 })
    peso: number;

    @Column({ nullable: true })
    unidadPeso: string;
}
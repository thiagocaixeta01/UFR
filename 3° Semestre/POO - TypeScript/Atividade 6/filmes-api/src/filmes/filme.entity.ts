import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('filmes')
export class Filme {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    titulo!: string;

    @Column()
    ano!: number;

    @Column()
    nota!: number;
}
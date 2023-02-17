export class Board extends BaseEntity{
    @Primary
    id: number;

    @Column
    title : string;
    
    @column
    description : string
}
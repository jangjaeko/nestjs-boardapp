import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './boards.status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './DTO/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
@Injectable()
export class BoardsService {
  //Inject Repository to service
  constructor(
    @InjectRepository(BoardRepository)
    private BoardRepository: BoardRepository,
  ) {}
  //for local environment
  // private boards: Board[] = [];
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoard(creaetBoardDto: CreateBoardDto) {
  //   const { title, description } = creaetBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  async createBoard(creaetBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = creaetBoardDto;
    const board = this.BoardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    await this.BoardRepository.save(board);
    return board;
  }

  // async getBoardById(id: number): Promise<Board> {
  //   const found = await this.BoardRepository.findOne(id);

  //   if (!found) {
  //     throw new NotFoundException(`can't find ${id}`);
  //   }
  //   return found;
  // }

  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Can't find Board with id : ${id}`);
  //   }
  //   return found;
  // }
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}

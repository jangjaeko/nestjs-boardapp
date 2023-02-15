import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './DTO/create-board.dto';
@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
  createBoard(creaetBoardDto: CreateBoardDto) {
    const { title, description } = creaetBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
}

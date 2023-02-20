import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'jangjaeho',
  password: '1234',
  database: 'board',
  entities: [__dirname + '../**/*.entity.{js,ts}'],
  synchronize: true,
};

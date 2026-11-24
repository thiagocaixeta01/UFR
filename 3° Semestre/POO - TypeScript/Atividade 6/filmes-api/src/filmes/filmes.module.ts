import { Module } from '@nestjs/common';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Filme } from './filme.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Filme])],
  controllers: [FilmesController],
  providers: [FilmesService]
})
export class FilmesModule {}

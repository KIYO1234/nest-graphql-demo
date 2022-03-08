import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UseInterceptors,
} from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsPipe } from "src/common/pipes/cats.pipe";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/common/guards/auth.guard";
import { CatsInterceptor } from "src/common/interceptors/cats.interceptor";

export type Limit = {
  limit: string;
};
// ブランチ名変更テスト用コメント
// @UseGuards(AuthGuard)
@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto); // 受け取った値を Service に渡す
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(":id")
  @UseInterceptors(CatsInterceptor)
  async findeOne(@Param("id", CatsPipe) id: string): Promise<string> {
    console.log("id ✊", id);
    console.log("typeof(id) ✊", typeof id);

    return this.catsService.findOne(id);
  }
}

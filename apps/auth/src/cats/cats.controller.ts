import { Controller, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  logText(@Body('text') text: string) {
    return this.catsService.logText(text);
  }
}

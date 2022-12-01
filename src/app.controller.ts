import { Get, Controller, Render, Body, Post } from '@nestjs/common';
import { AnimalDts } from './animal.dto';

@Controller()
export class AppController {
  @Get()
  @Render('zoo')
  root() {
    return {};
  }
  @Post()
  @Render('animal')
  phoneHandler(@Body() Body: AnimalDts): object {
    return Body;
  }
}

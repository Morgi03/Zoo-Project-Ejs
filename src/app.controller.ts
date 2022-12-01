import { Get, Controller, Render, Body, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('zoo')
  root() {
    return {};
  }
  @Post()
  @Render('animal')
  phoneHandler(@Body() Body: object): object {
    return Body;
  }
}

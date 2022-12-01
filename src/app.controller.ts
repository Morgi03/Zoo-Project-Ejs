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
    if (Body.name == null || Body.name == '') {
      throw new Error('Az állat neve nem lehet üres!');
    }
    if (Body.age < 0 || Body.age == null) {
      throw new Error(
        'Az állat életkorának nagyobbnak kell lennie mint nulla!',
      );
    }
    return Body;
  }
}

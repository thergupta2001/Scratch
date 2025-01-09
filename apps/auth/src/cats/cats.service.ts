import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './cats.schema';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  logText(text: string) {
    const createdText = new this.catModel({ name: text });
    return createdText.save();
  }
}

import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';
import { DynamoDBDataMapperService } from '../dynamodb-data-mapper/dynamodb-data-mapper.service';

@Injectable()
export class CatsService {
  constructor(private readonly mapper: DynamoDBDataMapperService) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new Cat();
    createdCat.name = createCatDto.name;
    createdCat.age = createCatDto.age;
    createdCat.breed = createCatDto.breed;
    return this.mapper.put(createdCat);
  }

  async findAll(): Promise<Cat[]> {
    return await this.mapper.get(Cat);
  }
}

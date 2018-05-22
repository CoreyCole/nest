import { Module } from '@nestjs/common';
import { Events2Gateway } from './events2.gateway';

@Module({
  providers: [Events2Gateway],
})
export class Events2Module {}

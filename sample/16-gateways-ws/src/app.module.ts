import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { Events2Module } from './events2/events2.module';

@Module({
  imports: [
    EventsModule,
    Events2Module,
  ],
})
export class ApplicationModule {}

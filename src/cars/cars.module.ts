import { CarsController } from './cars.controller';
import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}

import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Car, CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}

  @Get()
  getAllCars(): Car[] {
    return this.carService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number): Car | undefined {
    return this.carService.getById(id);
  }
}

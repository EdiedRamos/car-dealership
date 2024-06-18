import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import type { Car } from './interfaces/car.interface';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}

  @Get()
  getAllCars(): Car[] {
    return this.carService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number): Car {
    return this.carService.getById(id);
  }

  @Post()
  createCar(@Body() carBody: any) {
    return {
      method: 'POST',
      body: carBody,
    };
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() carBody: any) {
    return {
      method: 'PATCH',
      id,
      carBody,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'DELETE',
      id,
    };
  }
}

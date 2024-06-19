import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import type { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private carService: CarsService) {}

  @Get()
  getAllCars(): Car[] {
    return this.carService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseUUIDPipe) id: string): Car {
    return this.carService.getById(id);
  }

  @Post()
  // * This pipe was configure globally in main.ts
  // @UsePipes(ValidationPipe)
  createCar(@Body() carBody: CreateCarDto) {
    const created = this.carService.createCar(carBody);
    return {
      method: 'Car created',
      body: created,
    };
  }

  @Patch(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() carBody: any) {
    return {
      method: 'PATCH',
      id,
      carBody,
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return {
      method: 'DELETE',
      id,
    };
  }
}

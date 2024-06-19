import { CreateCarDto, UpdateCarDto } from './dto';
import { Injectable, NotFoundException } from '@nestjs/common';

import type { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[];

  constructor() {
    this.cars = [
      {
        id: '927baac9-bfb7-4341-a10d-6cd8669a0cf1',
        brand: 'Toyota',
      },
      {
        id: '2893b06b-c566-437d-9b41-1ee90c960852',
        brand: 'Honda',
      },
      {
        id: 'c54b581a-419f-4898-821c-98a52b63b088',
        brand: 'Hyundai',
      },
    ];
  }

  public findAll(): Car[] {
    return this.cars;
  }

  public getById(id: string): Car {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return car;
  }

  public createCar(car: CreateCarDto): Car {
    const newCar: Car = {
      id: crypto.randomUUID(),
      brand: car.brand,
    };
    this.cars.push(newCar);
    return newCar;
  }

  public updateCar(id: string, car: UpdateCarDto): Car {
    const targetCar = this.getById(id);
    targetCar.brand = car.brand;
    return targetCar;
  }
}

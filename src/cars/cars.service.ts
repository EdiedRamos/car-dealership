import { Injectable, NotFoundException } from '@nestjs/common';

import type { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[];

  constructor() {
    this.cars = [
      {
        id: crypto.randomUUID(),
        brand: 'Toyota',
      },
      {
        id: crypto.randomUUID(),
        brand: 'Honda',
      },
      {
        id: crypto.randomUUID(),
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
}

import { Injectable } from '@nestjs/common';

export interface Car {
  id: string;
  brand: string;
}

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

  public getById(id: string): Car | undefined {
    const car = this.cars.find((car) => car.id === id);
    return car;
  }
}

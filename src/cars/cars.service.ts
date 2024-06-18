import { Injectable } from '@nestjs/common';

export interface Car {
  id: number;
  brand: string;
}

@Injectable()
export class CarsService {
  private cars: Car[];

  constructor() {
    this.cars = [
      {
        id: 1,
        brand: 'Toyota',
      },
      {
        id: 2,
        brand: 'Honda',
      },
      {
        id: 3,
        brand: 'Hyundai',
      },
    ];
  }

  public findAll(): Car[] {
    return this.cars;
  }

  public getById(id: number): Car | undefined {
    const car = this.cars.find((car) => car.id === id);
    return car;
  }
}

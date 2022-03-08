import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      name: "melon",
      age: 5,
      breed: "breed",
    },
  ];

  create(cat: Cat) {
    this.cats.push(cat);
    console.log("this.cats: ", this.cats);
  }

  findAll(): Cat[] {
    console.log("this.cats: ", this.cats);
    return this.cats;
  }

  findOne(id): string {
    console.log(`#${id} cat 🐱`);
    return `#${id} cat`;
  }
}

import { Entity, Column } from 'typeorm';

@Entity('<%= underscore(name) %>')
export class <%= classify(name) %>OrmEntity {
  // ORM Entity properties
}

import { Controller } from '@nestjs/common';
import { I<%= classify(name) %>Service } from '../../domain/interfaces/services/<%= name %>.service.interface';

@Controller('<%= dasherize(name) %>')
export class <%= classify(name) %>Controller {
  constructor(private readonly <%= camelize(name) %>Service: I<%= classify(name) %>Service) {}
  // Controller methods
}

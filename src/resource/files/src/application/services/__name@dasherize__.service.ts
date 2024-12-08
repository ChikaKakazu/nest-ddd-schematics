import { Injectable } from '@nestjs/common';
import { I<%= classify(name) %>Service } from '../../domain/interfaces/services/<%= name %>.service.interface';

@Injectable()
export class <%= classify(name) %>Service implements I<%= classify(name) %>Service {
  // Service implementation
}

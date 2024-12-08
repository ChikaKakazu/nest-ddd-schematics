import { Injectable } from '@nestjs/common';
import { I<%= classify(name) %>Repository } from '../../domain/interfaces/repositories/<%= name %>.repository.interface';

@Injectable()
export class <%= classify(name) %>Repository implements I<%= classify(name) %>Repository {
  // Repository implementation
}

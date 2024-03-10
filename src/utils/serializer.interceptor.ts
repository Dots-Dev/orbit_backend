import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import deepResolvePromises from './deep-resolver';

@Injectable()
export class ResolvePromisesInterceptor implements NestInterceptor {
  /**
   * Intercept the execution context and call handler to return an observable of unknown type.
   *
   * @param {ExecutionContext} context - the execution context
   * @param {CallHandler} next - the call handler
   * @return {Observable<unknown>} an observable of unknown type
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(map((data) => deepResolvePromises(data)));
  }
}

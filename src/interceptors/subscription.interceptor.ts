import {
  CallHandler,
  ClassSerializerInterceptor,
  ExecutionContext,
  Injectable
} from "@nestjs/common";
import { Observable } from "rxjs";

/**
 * Setup graphql subscription interceptor
 * @example
 ```ts
  import { SubscriptionInterceptor } from 'nestjs-dev-utilities';

  app.useGlobalInterceptors(new SubscriptionInterceptor(reflector));
 ```
 */
@Injectable()
export class SubscriptionInterceptor extends ClassSerializerInterceptor {
  constructor(protected readonly reflector: any) {
    super(reflector);
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if ((context.getType() as string) === "graphql") {
      const op = context.getArgByIndex(3).operation.operation;
      if (op === "subscription") {
        return next.handle();
      }
    }
    return super.intercept(context, next);
  }
}

export default SubscriptionInterceptor;

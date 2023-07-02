import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

/**
 * Setup Custom Logging Interceptor
 * https://docs.nestjs.com/interceptors#binding-interceptors
 * 
 * @example
 ```ts
 import { LoggingInterceptor } from "nestjs-dev-utilities";

 app.useGlobalInterceptors(
    new LoggingInterceptor(),
  );
 ```
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const req = context.switchToHttp().getRequest();
    // if via http
    if (req) {
      const { method } = req;
      const { url } = req;
      return next
        .handle()
        .pipe(
          tap(() =>
            Logger.log(
              `${method} ${url} ${Date.now() - now}ms`,
              context.getClass().name
            )
          )
        );
    }
    // if graphql
    const ctx: any = GqlExecutionContext.create(context);
    const resolverName = ctx.constructorRef.name;
    const info = ctx.getInfo();
    return next
      .handle()
      .pipe(
        tap(() =>
          Logger.log(
            `${info.parentType} "${info.fieldName}" ${Date.now() - now}ms`,
            resolverName
          )
        )
      );
  }
}

export default LoggingInterceptor;

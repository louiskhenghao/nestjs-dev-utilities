import * as requestIp from "@supercharge/request-ip";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ExecutionContext, createParamDecorator } from "@nestjs/common";

/**
 * To retrieve request IP Address
 * @example
 ```ts
  import { IpAddress } from 'nestjs-dev-utilities';

  @Mutation(() => String)
  async someMutation(
    @IpAddress() ipAddress: string,
  ) {
    return ipAddress;
  }
 ```
 */
export const IpAddress = createParamDecorator(
  (data, context: ExecutionContext) => {
    const type = context.getType();
    let req = null;
    if (type === "http") {
      req = context.switchToHttp().getRequest();
    } else {
      // get gql execution context
      const ctx = GqlExecutionContext.create(context);
      req = ctx.getContext().req;
      return ctx.getContext().req.ip;
    }
    return requestIp.getClientIp(req);
  }
);

export default IpAddress;

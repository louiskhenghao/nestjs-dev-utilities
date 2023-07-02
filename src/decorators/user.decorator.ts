import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

/**
 * This decorator will be using on GraphQL Resolver / Controller
 *
 * GraphQL
 * @example
 *
 * ```js
 * @Query(returns => User)
 * @UseGuards(GqlAuthGuard) // <- Replace with your AuthGuard
 * async someQuery(@CurrentUser() user: User) {
 *    return this.usersService.findById(user.id);
 * }
 * ```
 *
 * Controller
 * @example
 * ```ts
 * @UseGuards(YourAuthGuard) // <- Replace with your AuthGuard
 * @Get('auth/profile')
 * async getUserProfile(@CurrentUser() user: User) {
 *    return user;
 * }
 * ```
 *
 * Reference:
 * 1. https://github.com/nestjs/nest/issues/4339#issuecomment-600468194
 * 2. https://docs.nestjs.com/security/authentication#graphql
 */
export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();
    if (req) return req.user;
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  }
);

export default CurrentUser;

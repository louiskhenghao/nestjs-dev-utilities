# nestjs-dev-utilities

`NestJs` utilities helper for development

---

## Table of Content

- [Getting Started](#getting-started)
- [Reference](#reference)
  - [Abstract Class](#abstract-class)
  - [Decorators](#decorators)
  - [Helpers](#helpers)
  - [Interceptors](#interceptors)
  - [TypeORM](#typeorm)
  - [Validators](#validators)

---

## Getting Started

```bash
# for yarn
yarn add nestjs-dev-utilities -D

# for npm
npm install nestjs-dev-utilities --save-dev
```

---

## Reference

### Abstract Class

- [AbstractDto](./src/abstract/abstract.dto.ts)
- [AbstractEntity](./src/abstract/abstract.entity.ts)

### Decorators

- [@IpAddress()](./src/decorators/ip.decorator.ts)
- [@CurrentUser()](./src/decorators/user.decorator.ts)

### Helpers

- [PasswordCipher](./src/helpers/password-cipher.helper.ts)

### Interceptors

- [LoggingInterceptor](./src/interceptors/logging.interceptor.ts)
- [SubscriptionInterceptor](./src/interceptors/subscription.interceptor.ts)

### TypeORM

- [SnakeNamingStrategy](./src/typeorm/snake-naming-strategy.orm.ts)

### Validators

- [@IsUndefined()](./src/validators/is-undefined.validator.ts)

import { Int, ObjectType } from "@nestjs/graphql";
import { FilterableField, IDField } from "@ptc-org/nestjs-query-graphql";

@ObjectType({ isAbstract: true })
export class AbstractDto {
  @IDField(() => Int)
  id: number;

  @FilterableField()
  createdAt: Date;

  @FilterableField()
  updatedAt: Date;
}

export default AbstractDto;

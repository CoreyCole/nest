import {
  attribute,
  autoGeneratedHashKey,
  rangeKey,
  table,
  versionAttribute,
} from '@aws/dynamodb-data-mapper-annotations';

@table('Cats')
export class Cat {
  @autoGeneratedHashKey()
  id: string;

  @rangeKey()
  createdAt: Date;

  @versionAttribute()
  version: number;

  @attribute()
  name?: string;

  @attribute()
  age?: number;

  @attribute()
  breed?: string;
}

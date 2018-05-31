import { Injectable } from '@nestjs/common';
import { DynamoDB } from 'aws-sdk';
import { DataMapper, ScanParameters } from '@aws/dynamodb-data-mapper';

@Injectable()
export class DynamoDBDataMapperService {
    private client: DynamoDB;
    private mapper: DataMapper;

    constructor() {
        this.client = new DynamoDB({
            region: 'us-west-2',
            endpoint: 'http://localhost:8000',
        });
        this.mapper = new DataMapper({ client: this.client });
    }

    public put<T>(item: T): Promise<T> {
        return this.mapper.put(item);
    }

    /**
     * Scans for an the passed item type
     * @param item generic dynamoDB data mapper annotation type
     * @returns AsyncIterator<T> Intended to be consumed with a `for await ... of` loop.
     */
    public get<T>(item: T): any {
        const scanParameter: ScanParameters = { valueConstructor: item };
        return this.mapper.scan(scanParameter);
    }
}

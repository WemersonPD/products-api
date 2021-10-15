import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1634274122494 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'profileType',
          type: 'int4',
          isNullable: true
        },
        {
          name: 'email',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'hash',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'createdAt',
          type: 'timestamptz',
          default: 'now()'
        },
        {
          name: 'updatedBy',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'updatedAt',
          type: 'timestamptz',
          default: 'now()'
        },
        {
          name: 'deletedBy',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'deletedAt',
          type: 'timestamptz',
          isNullable: true
        }
      ]

    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}

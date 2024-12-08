# nest-ddd-schematics

Nest.js で下の Tree 構造のテンプレートファイルを生成する.

```
└── src
    ├── application
    │   └── services
    │       └── __name@dasherize__.service.ts
    ├── domain
    │   ├── entities
    │   │   └── __name@dasherize__.entity.ts
    │   └── interfaces
    │       ├── repositories
    │       │   └── __name@dasherize__.repository.interface.ts
    │       └── services
    │           └── __name@dasherize__.service.interface.ts
    ├── infrastructure
    │   ├── entities
    │   │   └── __name@dasherize__.orm.entity.ts
    │   └── repositories
    │       └── __name@dasherize__.repository.ts
    └── interfaces
        └── controllers
            └── __name@dasherize__.controller.ts
```

## Usage

Nest.js プロジェクトに`npm install`しコマンドを叩く.

```
nest generate resource ○○ --collection @chika/nest-ddd-schematics
```

## nest-cli.json

Nest.js プロジェクトの nest-cli.json の`"collection": "@nestjs/schematics"`を@chika/nest-ddd-schematics に変更すると、`--collection @chika/nest-ddd-schematics`オプションが必要なくなる

```
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true
  }
}
```

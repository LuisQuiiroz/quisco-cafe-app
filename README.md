

## Aplicacion hecha con react, NEXT.js, TailwindCSS y utliliza prisma para conectarse con base de datos

## La base de datos está hecha con mysql
### `create database quioscoapp`

## Dependencias de desarrollo
### `npm i -D prisma`

## Dependencias de producción
### `npm i @prisma/client`

### `npx prisma init`

## Migrar base de datos a mysql (prisma/schema.prisma)
### `npx prisma migrate dev`

## Eliminar registros de la base de datos(reset)
### `npx prisma migrate reset`

## visualizar base de datos utilizando prisma
### `npx prisma studio`

## Seeding a la base de datos con prisma
Los datos se encuentran en prisma/data (categorias.ts, productos.ts)

prisma/seed.ts requiere los archivos que se encuentran en la carpeta de data

## Para ejecutar seed.ts requiere una dependencia
### `npm i ts-node`

### scripts dentro de package.json
"prisma": {
    "seed": "ts-node prisma/seed.ts"
}

## Ejecutar seed.ts
### `npx prisma db seed`

Finalmente, los datos se añaden correctamente a la base de datos
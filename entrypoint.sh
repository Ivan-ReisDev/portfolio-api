#!/bin/sh

echo "Waiting for PostgreSQL to become available..."
while ! nc -z postgres 5432; do
  sleep 1
done

echo "PostgreSQL is ready! Running migrations..."
npx prisma migrate deploy

echo "Starting the application..."
exec node dist/main

migrateup:
	migrate -path db/migrations -database "postgresql://postgres:123@localhost:5432/postgres?sslmode=disable" -verbose up

migratedown:
	migrate -path db/migrations -database "postgresql://postgres:123@localhost:5432/postgres?sslmode=disable" -verbose down

.PHONY:
	postgres createdb dropdbmigrateup migratedown
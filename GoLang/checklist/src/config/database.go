package config

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/jackc/pgx/v4"
	"github.com/joho/godotenv"
)

func SetDatabaseConfig() *pgx.Conn {
	var err = godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	var dbURL = os.Getenv("DATABASE_URL")
	var ctx = context.Background()

	conn, err := pgx.Connect(ctx, dbURL)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
	
	return conn
}
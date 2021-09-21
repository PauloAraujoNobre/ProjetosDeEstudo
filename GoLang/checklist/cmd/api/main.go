package main

import (
	"checklist/src/config"
	"checklist/src/repository/checklist"
	"checklist/src/service/handler"
	"context"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
)

func main() {
	// config.SetMigrationsConfig()
	var conn = config.SetDatabaseConfig()
	defer conn.Close(context.Background())

	var repo = checklist.NewRepo(conn)

	var r = chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.AllowContentType("application/json"))
	r.Use(middleware.SetHeader("Content-type", "application/json"))

	r.Route("/checklist", func(r chi.Router) {
		r.Get("/", handler.ChecklistGet(repo))
		r.Post("/", handler.ChecklistPost(repo))
		
		r.Route("/{checkId}", func(r chi.Router) {
			r.Get("/", handler.ChecklistGetById(repo))			
			r.Put("/", handler.ChecklistPut(repo))
			r.Delete("/", handler.ChecklistDelete(repo))
		})

	})

	config.SetServerConfig(r)	
}
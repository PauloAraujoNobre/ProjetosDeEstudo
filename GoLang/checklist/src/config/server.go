package config

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
)

func SetServerConfig(r *chi.Mux) {
	var port = ":3000"
	fmt.Println("Serving... /" + port)

	var err = http.ListenAndServe(port, r)
	if err != nil {
		fmt.Println(err)
	}
}
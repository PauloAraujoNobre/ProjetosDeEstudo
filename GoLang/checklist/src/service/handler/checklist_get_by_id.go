package handler

import (
	"checklist/src/repository/checklist"
	"checklist/src/service/schema"
	"encoding/json"
	"errors"
	"net/http"

	"github.com/go-chi/chi"
)

func ChecklistGetById(repo *checklist.Repo) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var id = chi.URLParam(r, "checkId")
		
		var item, err = repo.GetById(id, r.Context())
		if err != nil {
			if errors.Is(err, checklist.ErrItemNotFound) {
				w.WriteHeader(http.StatusNotFound)
				json.NewEncoder(w).Encode(schema.ErrorsOutput{
					Message: err.Error(),
				})
			}

			return
		}
		
		json.NewEncoder(w).Encode(item)
	}
}
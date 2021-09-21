package handler

import (
	"checklist/src/repository/checklist"
	"checklist/src/service/schema"
	"encoding/json"
	"errors"
	"net/http"

	"github.com/go-chi/chi"
)

func ChecklistPut(repo *checklist.Repo) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var id = chi.URLParam(r, "checkId")

		var _, err = repo.GetById(id, r.Context())
		if err != nil {
			if errors.Is(err, checklist.ErrItemNotFound) {
				w.WriteHeader(http.StatusNotFound)
				json.NewEncoder(w).Encode(schema.ErrorsOutput{
					Message: err.Error(),
				})
			}

			return
		}

		var request checklist.Item
		json.NewDecoder(r.Body).Decode(&request)		

		err = repo.Update(id, request, r.Context())
		if err != nil {
			if errors.Is(err, checklist.ErrItemUpdate) {
				w.WriteHeader(http.StatusBadRequest)

				json.NewEncoder(w).Encode(schema.ErrorsOutput{
					Message: err.Error(),
				})
			}

			return
		}

		var updatedItem, _ = repo.GetById(id, r.Context())
		json.NewEncoder(w).Encode(updatedItem)
	}
}

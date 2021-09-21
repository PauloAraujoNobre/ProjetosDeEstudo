package handler

import (
	"checklist/src/repository/checklist"
	"checklist/src/service/schema"
	"encoding/json"
	"errors"
	"net/http"
)

func ChecklistGet(repo *checklist.Repo) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var items, err = repo.GetAll(r.Context())
		if err != nil {
			if errors.Is(err, checklist.ErrItemNotFound) {
				w.WriteHeader(http.StatusNotFound)
				json.NewEncoder(w).Encode(schema.ErrorsOutput{
					Message: err.Error(),
				})
			}

			return
		}

		json.NewEncoder(w).Encode(items)
	}
}
package handler

import (
	"checklist/src/repository/checklist"
	"checklist/src/repository/input"
	"checklist/src/service/schema"
	"encoding/json"
	"errors"
	"net/http"
)

func ChecklistPost(repo *checklist.Repo) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var request = input.Input{}
		json.NewDecoder(r.Body).Decode(&request)

		if request.Validate() {
			json.NewEncoder(w).Encode(schema.ErrorsOutput{
				Message: "Some fields are empty",
			})

			return
		}

		var err = repo.Add(checklist.Item{
			Title: request.Title,
			Description: request.Description,
			Selected: request.Selected,
		}, r.Context())
		if err != nil {
			if errors.Is(err, checklist.ErrItemCreate) {
				w.WriteHeader(http.StatusBadRequest)
				json.NewEncoder(w).Encode(schema.ErrorsOutput{
					Message: err.Error(),
				})
			}

			return
		}

		json.NewEncoder(w).Encode(schema.MessagesOutput{
			Message: "Item created successfully",
		})
	}
}
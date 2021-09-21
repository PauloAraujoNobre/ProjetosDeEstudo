package checklist

import (
	"context"
	"fmt"
)

func (r *Repo) Add(item Item, ctx context.Context) error {
	commandTag, err := r.conn.Exec(ctx, "INSERT INTO checklist (title, description, selected) VALUES ($1, $2, $3)", item.Title, item.Description, item.Selected)
	if err != nil {
		fmt.Printf("%s: %s", ErrItemCreate, err)
		return ErrItemCreate
	}

	if commandTag.RowsAffected() != 1 {
		fmt.Printf("%s: %s", ErrItemCreate, err)
		return ErrItemCreate
	}

	return nil
}
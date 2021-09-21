package checklist

import (
	"context"
	"fmt"
	"time"
)

func (r *Repo) Update(itemId string, updatedItem Item, ctx context.Context) error {
	commandTag, err := r.conn.Exec(ctx, "UPDATE checklist SET title = $1, description = $2, selected = $3, date = $4 WHERE id = $5", updatedItem.Title, updatedItem.Description, updatedItem.Selected, time.Now(), itemId)
	if err != nil {
		fmt.Printf("Update checklist/:itemId - %s: %s", ErrItemUpdate, err)
		return ErrItemUpdate
	}
	if commandTag.RowsAffected() != 1 {
		fmt.Printf("Update checklist/:itemId - %s: %s", ErrItemUpdate, err)
		return ErrItemUpdate
	}

	return nil
}
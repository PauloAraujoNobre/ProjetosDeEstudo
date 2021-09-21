package checklist

import (
	"context"
	"fmt"
)

func (r *Repo) Delete(itemId string, ctx context.Context) error {
	commandTag, err := r.conn.Exec(ctx, "DELETE FROM checklist WHERE id = $1", itemId)
	if err != nil {
		fmt.Printf("%s: %s", ErrItemDelete, err)
		return ErrItemDelete
	}
	if commandTag.RowsAffected() != 1 {
		fmt.Printf("%s: %s", ErrItemDelete, err)
		return ErrItemDelete
	}

	return nil
}
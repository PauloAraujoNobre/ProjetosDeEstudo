package checklist

import (
	"context"
	"fmt"
)

func (r *Repo) GetById(itemId string, ctx context.Context) (Item, error) {
	var rows = r.conn.QueryRow(ctx, "SELECT id, title, description, selected, date FROM checklist WHERE id = $1", itemId)
	var item = Item{}

	var err = rows.Scan(&item.Id, &item.Title, &item.Description, &item.Selected, &item.Date)
	if err != nil {
		fmt.Printf("%s: %s", ErrItemNotFound, err)
			return Item{}, ErrItemNotFound
	}

	return item, nil
}
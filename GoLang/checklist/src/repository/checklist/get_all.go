package checklist

import (
	"context"
	"fmt"
)

func (r *Repo) GetAll(ctx context.Context) ([]Item, error) {
	var rows, err = r.conn.Query(ctx, "SELECT id, title, description, selected, date FROM checklist")
	if err != nil {
		fmt.Printf("%s: %s", ErrItemNotFound, err)
		return []Item{}, ErrItemNotFound
	}
	
	var checklist = make([]Item, 0)
	for rows.Next() {
		var c = Item{}
		err = rows.Scan(&c.Id, &c.Title, &c.Description, &c.Selected, &c.Date)
		if err != nil {
			fmt.Printf("%s: %s", ErrItemNotFound, err)
			return []Item{}, ErrItemNotFound
		}

		fmt.Println(c)

		checklist = append(checklist, c)
	}

	return checklist, nil
}
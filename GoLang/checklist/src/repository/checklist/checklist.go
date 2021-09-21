package checklist

import (
	"time"

	"github.com/jackc/pgx/v4"
)

type Item struct {
	Id int `json:"id"`
	Title string `json:"title"`
	Description string `json:"description"`
	Selected bool `json:"selected"`
	Date time.Time `json:"date"`
}

type Repo struct {
	items map[string]Item
	conn *pgx.Conn
}

func NewRepo(conn *pgx.Conn) *Repo {
	return &Repo{
		items: make(map[string]Item),
		conn: conn,
	}
}

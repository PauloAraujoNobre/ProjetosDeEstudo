package input

import "time"

type Input struct {
	Id    string    `json:"id"`
	Title string    `json:"title"`
	Description  string    `json:"description"`
	Selected bool      `json:"selected"`
	Date  time.Time `json:"date"`
}

func (i *Input) Validate() bool {
	return i.Title == "" || i.Description == ""
}

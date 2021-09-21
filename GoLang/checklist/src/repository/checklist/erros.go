package checklist

import "errors"

var ErrItemNotFound = errors.New("item not found")
var ErrItemBadRequest = errors.New("bad Request")
var ErrIdCreate = errors.New("create id error")
var ErrItemCreate = errors.New("create item error")
var ErrItemUpdate = errors.New("update item error")
var ErrItemDelete = errors.New("delete item error")
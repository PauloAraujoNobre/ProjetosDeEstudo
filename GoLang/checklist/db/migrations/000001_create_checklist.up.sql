CREATE TABLE IF NOT EXISTS "checklist" (
  "id" BIGSERIAL PRIMARY KEY,
  "title" varchar(255) NOT NULL,
  "description" varchar(255) NOT NULL,
  "selected" boolean NOT NULL,
  "date" timestamptz NOT NULL DEFAULT (now())
);

INSERT INTO checklist VALUES (1, 'Estudar', 'Golang', false);
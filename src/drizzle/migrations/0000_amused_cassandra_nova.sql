CREATE TABLE IF NOT EXISTS "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"author" text NOT NULL,
	"isbn" text NOT NULL,
	"publisher" text NOT NULL,
	"publishDate" date,
	"pageCount" integer NOT NULL,
	"language" text NOT NULL,
	"genre" text NOT NULL,
	CONSTRAINT "books_isbn_unique" UNIQUE("isbn")
);

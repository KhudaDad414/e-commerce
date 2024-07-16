CREATE TABLE IF NOT EXISTS "urls" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"shortHand" text NOT NULL,
	CONSTRAINT "urls_url_unique" UNIQUE("url"),
	CONSTRAINT "urls_shortHand_unique" UNIQUE("shortHand")
);

CREATE TABLE "galleryList" (
	"id" SERIAL PRIMARY KEY not null,
	"path" varchar(255) not null,
	"title" varchar(255) not null,
	"description" varchar(255) not null,
	"likes" integer not null
);

SELECT * FROM "galleryList";

INSERT INTO "galleryList" ("path", "title", "description", "likes")
VALUES ('images/PipSmall.jpg', 'Pip!', 'Our first cat, Pip. He likes to eat butter.', '7'), ('images/SlinkySmall.jpg', 'Slinky!', 'Our second cat, Slinky. She is adorable and perfect.', '10'), ('images/PCSmall.jpg', 'PC!', 'I built a new PC this year!', '12'), ('images/TargetSmall.jpg', 'Target!',  'I love going to Target, especially when they advertise the new Kirby game.', '0'), ('images/MN_SharksSmall.jpg', 'Sharks!', 'I LOVE SHARKS!', '13');
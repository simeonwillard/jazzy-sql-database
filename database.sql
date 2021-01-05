-- CREATE TABLE "artists" (
--     "id" SERIAL PRIMARY KEY,
--     "artist_name" varchar(80) not null,
--     "year_born" date
-- );

CREATE TABLE "artist" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(80) NOT NULL,
"birthdate" DATE
);

CREATE TABLE "song" (
"id" SERIAL PRIMARY KEY,
"title" VARCHAR(225) NOT NULL,
"length" VARCHAR(10),
"released" DATE
);

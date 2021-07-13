DROP TABLE "data"
CREATE TABLE "data" (
	"dog_id" BIGINT,
	"url" VARCHAR,
	"age" VARCHAR,
	"gender" VARCHAR,
	"size" VARCHAR,
	"name" VARCHAR,
	"breeds.primary" VARCHAR,
	"breeds.secondary" VARCHAR,
	"breeds.mixed" BOOLEAN,
	"breeds.unknown" BOOLEAN,
	"colors.primary" VARCHAR,
	"colors.secondary" VARCHAR,
	"colors.tertiary" VARCHAR,
	"attributes.house_trained" BOOLEAN,
	"attributes.special_needs" BOOLEAN,
	"attributes.shots_current" BOOLEAN,
	"environment.children" BOOLEAN,
	"environment.dogs" BOOLEAN,
	"environment.cats" BOOLEAN,
	"contact.address.address1" VARCHAR,
	"contact.address.address2" VARCHAR,
	"contact.address.city" VARCHAR,
	"contact.address.state" VARCHAR,
	"contact.address.postcode" VARCHAR,
	"animal_id" INTEGER,
	"primary_photo_cropped.full" VARCHAR,
	"Latitude" DECIMAL,
	"Longitude" DECIMAL,
	PRIMARY KEY (dog_id)
);
	
SELECT * FROM data
	
	
	

	
	
	
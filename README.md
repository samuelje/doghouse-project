# doghouse-project

## Inspiration:

* Jordan's pups were our number one source of inspiration. 
* We also drew inspiration from the following project link. Here the creators looked at creating an interactive webpage for finding lost dogs in El Paso.
    - https://gis.elpasotexas.gov/petfinder/index.html

## Our project objectives:

* Created an interactive map where users can search for dogs that are currently available for adoption within a 500 mile radius of each US capital. 
* Our users can use filters to narrow down their search for a dog by the following categories: Small dogs, medium dogs, large dogs, and extra large dogs


## Prorgramming languages, methods, and tools utilized:

* Our ETL process utilized Python Pandas in JupyterNotebooks to perform API call from Petfinder, load data to dataframe in Pandas, clean data, transform data for Geocoding, save dataframe in CSV format, convert CSV to geoJSON format, and load data to PostgreSQL database.
* JavaScript programming using Leaflet to create a map with layers and markers. The markers show a popup with photo for each dog with information related to each dog's name, size, breed, and weblink for Petfinder adoption website.

### Code Disclaimer

* The dataset utilized in this project is very large. The code takes a while to load. The for loop code in line 102 of the **logic_advanced.js** file in the `js` folder within the `static` folder can be edited to test run the data with a smaller portion of the overall data. 

* Original code in **logic_advanced.js**: 
```
for (var i = 0; i < dogLocation.length; i++) {
}
```
* Change code in **logic_advanced.js** to the following to test smaller portion of code:
```
for (var i = 0; i < 2000; i++) {
}
```

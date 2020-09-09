-- LESSON 1
SELECT title FROM movies;
SELECT director FROM movies;
SELECT title, director FROM movies;
SELECT title, year FROM movies; 
SELECT * FROM movies;

-- LESSON 2
SELECT id, title FROM movies WHERE id = 6;
SELECT title, year FROM movies WHERE year BETWEEN 2000 AND 2010;
SELECT title, year FROM movies WHERE year < 2000 OR year > 2010;
SELECT title, year FROM movies WHERE year <= 2003;

-- LESSON 3
SELECT * FROM movies WHERE title LIKE "Toy Story%";
SELECT title, director FROM movies WHERE director LIKE "John Lasseter";
SELECT title, director FROM movies WHERE director NOT LIKE "John Lasseter";
SELECT * FROM movies WHERE title LIKE "WALL-%";

--LESSON 4
SELECT DISTINCT director FROM movies ORDER BY director ASC;
SELECT title, year FROM movies ORDER BY year DESC LIMIT 4;
SELECT title, year FROM movies ORDER BY title ASC LIMIT 5;
SELECT title, year FROM movies ORDER BY title ASC LIMIT 5 OFFSET 5;

--LESSON 5
SELECT city, population FROM north_american_cities WHERE country = "Canada";
SELECT city, latitude FROM north_american_cities WHERE country = "United States" ORDER BY latitude DESC;

SELECT city, longitude FROM north_american_cities 

WHERE longitude < (SELECT longitude FROM north_american_cities WHERE city LIKE "Chicago")
ORDER BY longitude ASC;

SELECT city, population FROM north_american_cities WHERE country LIKE "Mexico" ORDER BY population DESC LIMIT 2;

SELECT city, population FROM north_american_cities WHERE country LIKE "United States" ORDER BY population DESC
LIMIT 2 OFFSET 2;

--LESSON 6
SELECT title,domestic_sales,international_sales FROM movies JOIN boxoffice on movies.id = boxoffice.movie_id;

SELECT title,domestic_sales,international_sales FROM movies
JOIN boxoffice on movies.id = boxoffice.movie_id
WHERE boxoffice.international_sales > boxoffice.domestic_sales;

SELECT title,rating FROM movies JOIN boxoffice ON movies.id = boxoffice.movie_id ORDER BY rating DESC;

--LESSON 7
SELECT DISTINCT building_name FROM buildings JOIN employees ON buildings.building_name = employees.building;
SELECT DISTINCT building_name,capacity FROM buildings;
SELECT DISTINCT building_name, role FROM buildings LEFT JOIN employees ON building_name = building;

--LESSON 8
SELECT name,role FROM employees WHERE building IS NULL;

SELECT DISTINCT building_name FROM buildings   LEFT JOIN employees
ON buildings.building_name = employees.building WHERE role IS NULL;

--LESSON 9
SELECT title, (domestic_sales+international_sales)/1000000 as SALES FROM movies
JOIN boxoffice ON movies.id = boxoffice.movie_id;

SELECT title, rating*10 as Rating FROM movies JOIN boxoffice ON movies.id = boxoffice.movie_id;
SELECT title FROM movies WHERE year%2=0;

--LESSON 10
SELECT max(years_employed) FROM employees;
SELECT DISTINCT role,avg(years_employed) FROM employees GROUP BY role;
SELECT building, SUM(years_employed) FROM employees GROUP BY building;

--LESSON 11
SELECT COUNT(*) FROM employees WHERE role LIKE "artist";
SELECT role,COUNT(*) FROM employees GROUP BY role;
SELECT sum(years_employed) FROM employees GROUP BY role HAVING role LIKE "engineer";

--LESSON 12
SELECT director,count(*) FROM movies GROUP BY director;

SELECT director,SUM(domestic_sales + international_sales) FROM movies 
INNER JOIN boxoffice ON movies.id = boxoffice.movie_id GROUP BY director;

--LESSON 13
INSERT INTO movies (title,director,year,length_minutes) VALUES ("Toy Story 4","Quentin T",2010,99);
INSERT INTO boxoffice VALUES (4, 8.7, 340000000, 270000000);

--LESSON 14
UPDATE movies SET director = "John Lasseter" WHERE title LIKE "A Bug's Life";
UPDATE movies SET year = 1999 WHERE title LIKE "Toy Story 2";
UPDATE movies SET title = "Toy Story 3", director = "Lee Unkrich" WHERE title LIKE "Toy Story 8";

--LESSON 15
DELETE FROM movies WHERE year < 2005;
DELETE FROM movies WHERE director LIKE "andrew stanton";

--LESSON 16
CREATE TABLE Database (
    Name TEXT,
    Version FLOAT,
    Download_count INTEGER
);

--LESSON 17
ALTER TABLE movies ADD Aspect_ratio float;
ALTER TABLE movies ADD Language TEXT DEFAULT "English";

--LESSON 18
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS boxoffice;
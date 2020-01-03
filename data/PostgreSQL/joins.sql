-- Descrip"tion: Simple join query. Join is on Series iD. Return is all characters from Super Mario series.
-- Data Source: http://127.0.0.1:61852/browser/

-- Select Query
SELECT * FROM character c
	JOIN series s ON c.seriesid = s.id
		WHERE s.name = 'Super Mario';

-- 5 Records returned
SELECT count(c.name) FROM character c
	JOIN series s ON c.seriesid = s.id
		WHERE s.name = 'Super Mario';

-- Join to tables, only returns first tables data
select c.* from public.character c 
JOIN attributes a ON c.id = a.characterid
where c.name = 'Sonic';

-- Join to tables, only returns second tables data
select a.* from public.character c 
JOIN attributes a ON c.id = a.characterid
where c.name = 'Sonic';

--Nester Query that returns attributes for Sonic
SELECT * from attributes where characterid in (SELECT id FROM character where name = 'Sonic');

--Update value in nested query
Update attributes 
	SET dash = 1
		where characterid in (SELECT id FROM character where name = 'Sonic');


--uUpdate multipe values in nesterd query
Update attributes 
	SET dash = 1, gravity = 46 
		where characterid in (SELECT id FROM character where name = 'Sonic');	

--Having
SELECT s.name,count(c.name) FROM character c
	JOIN series s ON c.seriesid = s.id
	GROUP BY s.name
	HAVING count(c.name) > 2
	ORDER BY 2 desc;			


SELECT s.name,count(a.dash) As dash,
	count(a.gravity) As gravity,
	count(a.weight) As weight,
	count(a.jump) As jump,
	count(a.walk) As walk, 
	count(a.traction) As traction
	FROM character c
	JOIN series s ON c.seriesid = s.id
	JOIN attributes a ON a.characterid = c.id
	GROUP BY 1;

--bunch of junk
(WITH relevant_data AS
(SELECT s.name As series,sum(a.dash) As dash,
	sum(a.gravity) As gravity,
	sum(a.weight) As weight,
	sum(a.jump) As jump,
	sum(a.walk) As walk, 
	sum(a.traction) As traction,
	count(c.id) As character
	FROM character c
	JOIN series s ON c.seriesid = s.id
	JOIN attributes a ON a.characterid = c.id
	GROUP BY 1)
 
SELECT * FROM series As "Series",dash As dash,gravity As gravity,
character,
  (CASE WHEN character != 0 THEN character/(dash*gravity)::numeric *100000 ELSE 0 END)::numeric  AS best_ratio
from relevant_data
Order by 5)

	

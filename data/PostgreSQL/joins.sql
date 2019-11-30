-- Descrip"tion: Simple join query. Join is on Series iD. Return is all characters from Super Mario series.
-- Data Source: http://127.0.0.1:61852/browser/

-- Select Query
SELECT * FROM character c
	JOIN series s ON c.seriesid = s.id
		WHERE s.name = 'Super Mario'

-- 5 Recoreds returned
SELECT count(c.name) FROM character c
	JOIN series s ON c.seriesid = s.id
		WHERE s.name = 'Super Mario'
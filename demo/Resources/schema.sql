-- Table: public.world_population

-- DROP TABLE IF EXISTS public.world_population;

CREATE TABLE IF NOT EXISTS public.world_population
(
    country_name text COLLATE pg_catalog."default",
    variable text COLLATE pg_catalog."default",
    value bigint
)

TABLESPACE pg_default;



ALTER TABLE IF EXISTS public.world_population
    OWNER to postgres;
    

-- Table: public.unemployment_rate

-- DROP TABLE IF EXISTS public.unemployment_rate;

CREATE TABLE IF NOT EXISTS public.unemployment_rate
(
    country_name text COLLATE pg_catalog."default",
    variable text COLLATE pg_catalog."default",
    value double precision
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.unemployment_rate
    OWNER to postgres;
    
-- Displaying everything from wolrd_population table 

select * from public.world_population;

-- Displaying everything from unemployment_rate table 

select * from public.unemployment_rate;

-- Table: public.world_population

 DROP TABLE IF EXISTS public.world_population;

CREATE TABLE IF NOT EXISTS public.world_population
(
    country_name text primary key,
    "2015" bigint,
    "2016" bigint,
    "2017" bigint,
    "2018" bigint,
    "2019" bigint,
    "2020" bigint,
    "2021" bigint    
)

-- Table: public.unemployment_rate

DROP TABLE IF EXISTS public.unemployment_rate;

CREATE TABLE IF NOT EXISTS public.unemployment_rate
(
    country_name text primary key,
    "2015" int,
    "2016" int,
    "2017" int,
    "2018" int,
    "2019" int,
    "2020" int,
    "2021" int    
)
-- Displaying everything from wolrd_population table 

select * from public.world_population;

-- Displaying everything from unemployment_rate table 

select * from public.unemployment_rate;

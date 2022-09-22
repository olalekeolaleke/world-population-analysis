-- Table: public.world_population

 DROP TABLE IF EXISTS public.world_population;

CREATE TABLE public.world_population(
    id serial primary key,
    country_name text,
    variable text,
    value bigint
);


-- Table: public.unemployment_rate

 DROP TABLE IF EXISTS public.unemployment_rate;

CREATE TABLE IF NOT EXISTS public.unemployment_rate(
    
    id serial primary key,
    country_name text,
    variable text,
    value double precision
);

    
-- Displaying everything from wolrd_population table 

select * from public.world_population;

-- Displaying everything from unemployment_rate table 

select * from public.unemployment_rate;
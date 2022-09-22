-- Table: public.unemployment_rate

-- DROP TABLE IF EXISTS public.unemployment_rate;

CREATE TABLE IF NOT EXISTS public.unemployment_rate
(
    country_name text COLLATE pg_catalog."default" NOT NULL,
    "2011" integer,
    "2012" integer,
    "2013" integer,
    "2014" integer,
    "2015" integer,
    "2016" integer,
    "2017" integer,
    "2018" integer,
    "2019" integer,
    "2020" integer,
    "2021" integer,
    CONSTRAINT unemployment_rate_pkey PRIMARY KEY (country_name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.unemployment_rate
    OWNER to postgres;
    
-- Table: public.world_population

-- DROP TABLE IF EXISTS public.world_population;

CREATE TABLE IF NOT EXISTS public.world_population
(
    country_name text COLLATE pg_catalog."default" NOT NULL,
    "2011" bigint,
    "2012" bigint,
    "2013" bigint,
    "2014" bigint,
    "2015" bigint,
    "2016" bigint,
    "2017" bigint,
    "2018" bigint,
    "2019" bigint,
    "2020" bigint,
    "2021" bigint,
    CONSTRAINT world_population_pkey PRIMARY KEY (country_name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.world_population
    OWNER to postgres;
    
select * from unemployment_rate;

select * from world_population;
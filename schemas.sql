-- Table: public.world_population

-- DROP TABLE IF EXISTS public.world_population;

CREATE TABLE IF NOT EXISTS public.world_population
(
    "Rank" double precision,
    id text COLLATE pg_catalog."default",
    pop2022 double precision,
    pop2021 double precision,
    "GrowthRate" double precision,
    "Density" double precision
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.world_population
    OWNER to postgres;

-- Table: public.world_coordinates

-- DROP TABLE IF EXISTS public.world_coordinates;

CREATE TABLE IF NOT EXISTS public.world_coordinates
(
    id text COLLATE pg_catalog."default",
    latitude double precision,
    longitude double precision
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.world_coordinates
    OWNER to postgres;
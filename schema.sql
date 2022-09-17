drop table public.world_population;

create table public.world_population(
    id serial primary key,
    country_name text,
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
    "2021" bigint
);

select * from public.world_population;

drop table public.unemployment_rate;

create table public.unemployment_rate(
    id serial primary key,
    country_name text,
    "2011" int,
    "2012" int,
    "2013" int,
    "2014" int,
    "2015" int,
    "2016" int,
    "2017" int,
    "2018" int,
    "2019" int,
    "2020" int,
    "2021" int
);

select * from public.unemployment_rate;
select * from players_2015;
select * from players_2016;
select * from players_2017;
select * from players_2018;
select * from players_2019;
select * from team_2015;
select * from team_2016;
select * from team_2017;
select * from team_2018;
select * from team_2019;
select * from EasternConference_2015;
select * from EasternConference_2016;
select * from EasternConference_2017;
select * from EasternConference_2018;
select * from EasternConference_2019;
select * from WesternConference_2015;
select * from WesternConference_2016;
select * from WesternConference_2017;
select * from WesternConference_2018;
select * from WesternConference_2019;

-- drop table players_2015;
-- drop table players_2016;
-- drop table players_2017;
-- drop table players_2018;
-- drop table players_2019;
-- drop table team_2015;
-- drop table team_2016;
-- drop table team_2017;
-- drop table team_2018;
-- drop table team_2019;
-- drop table EasternConference_2015;
-- drop table EasternConference_2016;
-- drop table EasternConference_2017;
-- drop table EasternConference_2018;
-- drop table EasternConference_2019;
-- drop table WesternConference_2015;
-- drop table WesternConference_2016;
-- drop table WesternConference_2017;
-- drop table WesternConference_2018;

-- create table EasternConference_2015 (
		--Reminder that 2015 table is different from 2018/2019
-- create table EasternConference_2016 (
		--Reminder that 2016 table is different from 2018/2019
-- create table EasternConference_2017 (
		--Reminder that 2017 table is different from 2018/2019
-- create table EasternConference_2018 (		
create table EasternConference_2019 (
	Rk integer,
	Squad Varchar(30),
	MP integer,
	W integer,
	D integer,
	L integer,
	GF integer,
	GA integer, 
	GDiff integer,
	Pts integer,
	xG decimal,
	xGA decimal,
	xGDiff decimal,
	xGDiff_90 decimal,
	Attendance bigint,
	Top_Team_Scorer varchar(100),
	Goalkeeper varchar(50),
	Notes varchar(100)
)
-- create table WesternConference_2015 (
		--Reminder that 2015 table is different
-- create table WesternConference_2016 (
		--Reminder that 2016 table is different
-- create table WesternConference_2017 (
		--Reminder that 2017 table is different
-- create table WesternConference_2018 (
create table WesternConference_2019 (
	Rk integer,
	Squad Varchar(30),
	MP integer,
	W integer,
	D integer,
	L integer,
	GF integer,
	GA integer, 
	GDiff integer,
	Pts integer,
	xG decimal,
	xGA decimal,
	xGDiff decimal,
	xGDiff_90 decimal,
	Attendance bigint,
	Top_Team_Scorer varchar(100),
	Goalkeeper varchar(50),
	Notes varchar(100)
)
-- create table Players_2015 (
	-- Reminder that 2015 table is different from 2018/2019
-- create table Players_2016 (
	-- Reminder that 2016 table is different from 2018/2019
-- create table Players_2017 (
	-- Reminder that 2017 table is different from 2018/2019
-- create table Players_2018 (
create table Players_2019 (
	Rk integer,
	Player varchar(200),
	Nation varchar(50),
	Pos varchar(10),
	Squad varchar(50),
	Age integer,
	Born integer,
	MP_playingtime integer,
	Starts_playingtime integer,
	Min_playingtime integer,
	Gls_performance integer,
	Ast_performance integer,
	PK_performance integer,
	PKatt_performance integer,
	CrdY_performance integer,
	CrdR_performance integer,
	Gls_per90min decimal,
	Ast_per90min decimal,
	G_plus_A_per90min decimal,
	G_minus_PK_per90min decimal,
	G_plus_A_minus_PK_per90min decimal,
	xG_expected decimal,
	npxG_expected decimal,
	xA_expected decimal,
	xG_per90min decimal,
	xA_per90min decimal,
	xG_plus_xA_per90min decimal,
	npxG_per90min decimal,
	npxG_plus_xA_per90min decimal
)
-- create table team_2015 (
	-- Reminder that 2015 table is different from 2018/2019
-- create table team_2016 (
	-- Reminder that 2016 table is different from 2018/2019
-- create table team_2017 (
	-- Reminder that 2017 table is different from 2018/2019
-- create table team_2018 (
create table team_2019 (
	Squad varchar(50),
	No_Pl integer,
	Age decimal,
	Poss varchar(50),
	MP_playingtime integer,
	Starts_playingtime integer,
	Min_playingtime integer,
	Gls_performance integer,
	Ast_performance integer,
	PK_performance integer,
	PKatt_performance integer,
	CrdY_performance integer,
	CrdR_performance integer,
	Gls_per90min decimal,
	Ast_per90min decimal,
	G_plus_A_per90min decimal,
	G_minus_PK_per90min decimal,
	G_plus_A_minus_PK_per90min decimal,
	xG_expected decimal,
	npxG_expected decimal,
	xA_expected decimal,
	xG_per90min decimal,
	xA_per90min decimal,
	xG_plus_xA_per90min decimal,
	npxG_per90min decimal,
	npxG_plus_xA_per90min decimal
)

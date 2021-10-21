# Sample Proposal - Cacophony
 
## Overview  
Cacophony is a web-based application for creating music playlists based on your listening history as tracked by Last.fm. You can log in via Spotify authentication, create playlists of your top played songs over a given period of time by providing your Last.fm username, and view all your created playlists. A user can modify their playlist creation by changing the number of songs and/or the time period analyzed by Cacophony. In addition, a manager can view all the created playlists by all the users and track the most popular genres and artists that have been put in playlists.
 
## Tables 
1.	User table, for email address and Spotify account. 
2.	Playlist table, for tracking newly-created playlists by a user. 
3.	Songs table, for tracking each song in a given playlist.
4.	Information table, for tracking information relating to genres, artists, albums, duration, and country of origin over a period of time.
5.	Genre table, for tracking the most popular genres across all users.
6.	Artist table, for tracking the most popular artists across all users.


## User Stories 
1.	As a user, I should be able to sign in by linking my Spotify account.
2.	As a user, I should be able to view my most played tracks. 
3.	As a user, I should be able to set the time period with which my most played tracks are accumulated. 
4.	As a user, I should be able to create a playlist of my most viewed tracks over a set time period. 
5.	As a user, I should be able to view information on my listening habits over a set time period. 
6.	As a user, I should be able to view infographics depicting my playlist content.
7.	As a user, I should be able to view a leaderboard of the most popular songs in various genres.
8.	As a user, I should be able to view a leaderboard of the most popular playlists.
9.	As a manager, I should be able to view all Spotify accounts linked to the website. 
10.	As a manager, I should be able to view all the created playlists.
11.	As a manager, I should be able to delete created playlists. 

## Tech Stack
-	C#
-	ASP .NET Web API
-	ElephantSQL
-	HTML/CSS
-	EF Core
-	Javascript/Jquery
-	Angular
-	Serilog
-	Xunit
-	Spotify API
-   Last.fm API
-	Azure Web Services
-	GitHub Actions
-	SonarCloud

## MVP

-	Logging in via Spotify
-	Creating playlists by setting time period and song number parameters
-	Embedding Spotify playlist on website
-	Viewing already created playlists
-	Listening infographics for playlists
-	Leaderboard webpages
-	Manager account and playlist deletion

## Stretch Goals

-	Following other users
-	Being able to create playlists based on other factors (top artists, top songs from a single country, etc)
-	Listening infographics for users total history
-	Suggest similar playlists created by other users
-	Playlist comparison

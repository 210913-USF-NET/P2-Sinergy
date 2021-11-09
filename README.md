# Cacophony
 
## Overview  
Cacophony is a web-based application for creating music playlists based on your listening history as tracked by Last.fm. You can log in via Spotify authentication, create playlists of your top played songs over a given period of time by providing your Last.fm username, and view all your created playlists. A user can modify their playlist creation by changing the number of songs and/or the time period analyzed by Cacophony. 

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
6.	As a user, I should be able to view infographics depicting my artist listening habits.

## Tech Stack
-	C#
-	ASP .NET Web API
-	ElephantSQL
-	HTML/CSS
-	EF Core
-	Javascript/Jquery
-	Typescript
-	Angular
-	Serilog
-	Xunit
-	Spotify API
- Last.fm API
-	Azure Web Services
-	GitHub Actions

## Features

-	Authenticating via Spotify
-	Creating playlists by setting time period and song number parameters
-	Embedding Spotify playlist on website
-	Viewing already created playlists
-	Listening infographics for playlists

## Under Construction

-	Being able to create playlists based on other factors (top artists, top songs from a single country, etc)
-	Listening infographics for users total history
-	Create playlists based on suggested songs from Spotify
-	Playlist comparison
-	Manager account

using System;

namespace Models
{
    public class Playlist
    {
        public Playlist() { }
        public Playlist(int PlaylistID) : this()
        {
            this.PlaylistID = PlaylistID;
        }
        public Playlist(int PlaylistID, int UserID) : this(PlaylistID)
        {
            this.UserID = UserID;
        }
        public int PlaylistID { get; set; }

        public string PlaylistName {get; set;}
        public int UserID { get; set; }
        public string user { get; set; }
        public int SongCount { get; set; }
        public int Timeframe { get; set; }
        public DateTime Date { get; set; }
        
    }
}
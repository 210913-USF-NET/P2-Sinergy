using System;
using System.Collections.Generic;

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
        public string Username { get; set; }
        public int SongCount { get; set; }
        public int StartDate { get; set; }
        public int EndDate { get; set; }
        public DateTime Date { get; set; }
        public List<Songs> songList { get; set; }

}
}
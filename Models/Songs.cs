namespace Models
{
    public class Songs
    {
        public Songs() {}
        public Songs (int PlaylistID) : this()
        {
            this.PlaylistID = PlaylistID;
        }
        public Songs (int PlaylistID, int InformationID) : this(PlaylistID)
        {
            this.InformationID = InformationID;
        }
        public int PlaylistID { get; set; }
        public string URI { get; set; }
        public string URL { get; set; }
        public int InformationID { get; set; }
    }
}
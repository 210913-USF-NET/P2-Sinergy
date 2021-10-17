using System.Collections.Generic;

namespace Models
{
    public class Information
    {
        public Information(){}
        public Information(int InformationID) : this()
        {
            this.InformationID = InformationID;
        }
        public int InformationID {get; set;}
        public string Genre { get; set; }
        public string Artist { get; set; }
        public string Album { get; set; }
        public int Duration { get; set; } //will need to convert from milliseconds
        public string Country { get; set; }
    }
}
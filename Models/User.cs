using System;
using System.Collections.Generic;

namespace Models
{
    public class User
    {
        public User() { }

        public User(int UserID) : this()
        {
            this.UserID = UserID;
        }

        public User(int UserID, string email) : this(UserID)
        {
            this.email = email;
        }

        public User(int UserID, string email, string account) : this(UserID, email)
        {
            this.account = account;
        }

        public User(int UserID, string email, string account, bool admin) : this(UserID, email, account) {}

        //Property
        public int UserID { get; set; }

        public string email { get; set; }

        public string account { get; set; }

        public bool admin { get; set; }
    }
}

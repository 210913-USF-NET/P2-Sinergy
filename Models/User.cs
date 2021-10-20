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

        public User(int UserID, string Email) : this(UserID)
        {
            this.Email = Email;
        }

        public User(int UserID, string Email, string Account) : this(UserID, Email)
        {
            this.Account = Account;
        }
        public int UserID { get; set; }

        public string user { get; set; }

        public string Email { get; set; }

        public string Account { get; set; }

        public bool Admin { get; set; }
    }
}

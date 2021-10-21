using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice_App.Services
{
    public interface IAccountService
    {
        Task<string> GetToken(string clientID, string clientSecret);
    }
}

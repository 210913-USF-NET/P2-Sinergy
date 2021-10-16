using System;
using System.Collections.Generic;
using DL;
using Models;

namespace CacBL
{
    public class BL : IBL
    {
        private IRepo _repo;
        //dependency injection
        public BL(IRepo repo)
        {
            _repo = repo;
        }
    }
}

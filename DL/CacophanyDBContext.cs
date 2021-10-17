using Microsoft.EntityFrameworkCore;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DL
{
    public class CacophanyDBContext : DbContext
    {
        public CacophanyDBContext() : base() { }
        public CacophanyDBContext(DbContextOptions options) : base(options) { }
        public DbSet<Playlist> Playlists {get; set;}
        public DbSet<Songs> Songs { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Information> Info { get; set;}
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Artist> Artists { get; set; }
    }
}

using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DL
{
    public class DBRepo : IRepo
    {
        private CacophanyDBContext _context;
        public DBRepo(CacophanyDBContext context)
        {
            _context = context;
        }

        public async Task<Playlist> AddPlaylistAsync(Playlist playlist)
        {
            await _context.AddAsync(playlist);
            await _context.SaveChangesAsync();
            _context.ChangeTracker.Clear();
            return playlist;

        }


    }
}

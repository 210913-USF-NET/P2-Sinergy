using Microsoft.EntityFrameworkCore;
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
        private CacophonyDBContext _context;
        public DBRepo(CacophonyDBContext context)
        {
            _context = context;
        }

        //Playlist Methods//
        public async Task<Playlist> AddPlaylistAsync(Playlist playlist)
        {
            await _context.AddAsync(playlist);
            await _context.SaveChangesAsync();
            _context.ChangeTracker.Clear();
            return playlist;

        }
        public async Task<Playlist> GetPlaylistByIdAsync(int id)
        {
            return await _context.Playlists
                .AsNoTracking()
                //.Include(r => r.Reviews)
                .FirstOrDefaultAsync(r => r.PlaylistID == id);
        }

        public async Task<List<Playlist>> GetPlaylistsByUserIdAsync(int id)
        {
            return await _context.Playlists.Where(p => p.UserID == id)
                .Select(i => new Playlist()).ToListAsync();
                
        }

        public async Task<Playlist> UpdatePlaylistAsync(Playlist updatedPlaylist)
        {
            _context.Playlists.Update(updatedPlaylist);
            await _context.SaveChangesAsync();
            _context.ChangeTracker.Clear();

            return new Playlist()
            {
                PlaylistID = updatedPlaylist.PlaylistID,
                UserID = updatedPlaylist.UserID,
                user = updatedPlaylist.user,
                SongCount = updatedPlaylist.SongCount,
                Timeframe = updatedPlaylist.Timeframe,
                Date = updatedPlaylist.Date

            };
        }

        public async Task RemovePlaylistAsync(int id)
        {
            _context.Playlists.Remove(await GetPlaylistByIdAsync(id));
            await _context.SaveChangesAsync();
            _context.ChangeTracker.Clear();
        }


        //update playlist method


        //User Methods//
        public async Task<User> AddUserAsync(User user)
        {
            await _context.AddAsync(user);
            await _context.SaveChangesAsync();
            _context.ChangeTracker.Clear();
            return user;

        }
        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _context.Users
                .AsNoTracking()
                //.Include(r => r.Reviews)
                .FirstOrDefaultAsync(r => r.UserID == id);
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            return await _context.Users
                .Select(
                user => new User()
                {
                    UserID = user.UserID,
                    Account = user.Account,
                    Email = user.Email
                }
             ).ToListAsync();
        }

        public async Task<User> UpdateUserAsync(User updatedUser)
        {
            _context.Users.Update(updatedUser);
            await _context.SaveChangesAsync();
            _context.ChangeTracker.Clear();

            return new User()
            {
                UserID = updatedUser.UserID,
                Email = updatedUser.Email,
                Account = updatedUser.Account

            };
        }

        public async Task RemoveUserAsync(int id)
        {
            _context.Users.Remove(await GetUserByIdAsync(id));
            await _context.SaveChangesAsync();
            _context.ChangeTracker.Clear();
        }
    }


    
}

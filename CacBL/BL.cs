using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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

        public async Task<Playlist> AddPlaylistAsync(Playlist playlist)
        {
            return await _repo.AddPlaylistAsync(playlist);
        }

        public async Task<Playlist> GetPlaylistByIdAsync(int id)
        {
            return await _repo.GetPlaylistByIdAsync(id);
        }

        public List<Playlist> GetPlaylistByUserId(int id)
        {
            return _repo.GetPlaylistByUserId(id);
        }
        public async Task<User> AddUserAsync(User user)
        {
            return await _repo.AddUserAsync(user);
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _repo.GetUserByIdAsync(id);
        }

        public List<User> GetAllUsers()
        {
            return _repo.GetAllUsers();
        }
    }   
    
}

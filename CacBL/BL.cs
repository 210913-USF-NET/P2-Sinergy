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

        public async Task<List<Playlist>> GetPlaylistsByUserIdAsync(int id)
        {
            return await _repo.GetPlaylistsByUserIdAsync(id);
        }

        public async Task<Playlist> UpdatePlaylistAsync(Playlist updatedPlaylist)
        {
            return await _repo.UpdatePlaylistAsync(updatedPlaylist);
        }

        public async Task RemovePlaylistsAsync(int id)
        {
            await _repo.RemovePlaylistAsync(id);
        }
        public async Task<User> AddUserAsync(User user)
        {
            return await _repo.AddUserAsync(user);
        }

        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _repo.GetUserByIdAsync(id);
        }

        public async Task<List<User>> GetAllUsersAsync()
        {
            return await _repo.GetAllUsersAsync();
        }

        public async Task<User> UpdateUserAsync(User updatedUser)
        {
            return await _repo.UpdateUserAsync(updatedUser);
        }

        public async Task RemoveUserAsync(int id)
        {
            await _repo.RemoveUserAsync(id);
        }
    }   
    
}

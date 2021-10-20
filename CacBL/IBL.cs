using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace CacBL
{
    public interface IBL
    {
        Task<Playlist> AddPlaylistAsync(Playlist playlist);
        Task<Playlist> GetPlaylistByIdAsync(int id);
        Task<List<Playlist>> GetPlaylistsByUserIdAsync(int id);
        Task<Playlist> UpdatePlaylistAsync(Playlist updatedPlaylist);
        Task RemovePlaylistAsync(int id);
        Task<User> AddUserAsync(User user);
        Task<User> GetUserByIdAsync(int id);
        Task<List<User>> GetAllUsersAsync();
        Task<User> UpdateUserAsync(User updatedUser);
        Task RemoveUserAsync(int id);
    }
}
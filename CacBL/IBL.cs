using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace CacBL
{
    public interface IBL
    {
        Task<Playlist> AddPlaylistAsync(Playlist playlist);
        Task<Playlist> GetPlaylistByIdAsync(int id);
        List<Playlist> GetPlaylistByUserId(int id);
        Task<User> AddUserAsync(User user);
        Task<User> GetUserByIdAsync(int id);
        List<User> GetAllUsers();
    }
}
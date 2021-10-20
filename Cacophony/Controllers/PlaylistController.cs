using CacBL;
using Microsoft.AspNetCore.Mvc;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Cacophony.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaylistController : ControllerBase
    {
        private IBL _bl;
        public PlaylistController(IBL bl)
        {
            _bl = bl;
        }

        // GET: api/<PlaylistController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<PlaylistController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            Playlist getPlaylist = await _bl.GetPlaylistByIdAsync(id);
            if (getPlaylist != null)
            {
                return Ok(getPlaylist);
            }
            else
            {
                return NoContent();
            }
            
        }

        // POST api/<PlaylistController>
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] Playlist newplaylist)
        {
            Playlist addedPlaylist = await _bl.AddPlaylistAsync(newplaylist);
            return Created("api/[controller]", addedPlaylist);
        }

        // PUT api/<PlaylistController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            //edit playlist
        }

        // DELETE api/<PlaylistController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

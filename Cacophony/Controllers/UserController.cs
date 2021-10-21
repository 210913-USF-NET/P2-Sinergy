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
    public class UserController : ControllerBase
    {
        private IBL _bl;
        public UserController(IBL bl)
        {
            _bl = bl;
        }

        // GET: api/<UserController>
        [HttpGet]
        public async Task<IEnumerable<User>> GetAsync()
        {
            return await _bl.GetAllUsersAsync();
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsync(int id)
        {
            User getUser = await _bl.GetUserByIdAsync(id);
            if (getUser != null)
            {
                return Ok(getUser);
            }
            else
            {
                return NoContent();
            }
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] User newuser)
        {
            User addedUser = await _bl.AddUserAsync(newuser);
            return Created("api/[controller]", addedUser);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] User newUser)
        {
            User updatedUser = await _bl.UpdateUserAsync(newUser);
            return Ok(newUser);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _bl.RemoveUserAsync(id);
        }
    }
}

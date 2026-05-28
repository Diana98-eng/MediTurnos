using Microsoft.AspNetCore.Mvc;
using UsersService.Data;
using UsersService.Models;

namespace UsersService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UsersDbContext _context;

        public UsersController(UsersDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetUsuarios()
        {
            var usuarios = _context.Usuarios.ToList();

            return Ok(usuarios);
        }

        [HttpPost("register")]
        public IActionResult Register(Usuario usuario)
        {
            _context.Usuarios.Add(usuario);

            _context.SaveChanges();

            return Ok(usuario);
        }
    }
}

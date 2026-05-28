using Microsoft.AspNetCore.Mvc;
using AppointmentsService.Data;
using AppointmentsService.Models;

namespace AppointmentsService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppointmentsController : ControllerBase
    {
        private readonly AppointmentsDbContext _context;

        public AppointmentsController(AppointmentsDbContext context)
        {
            _context = context;
        }

        [HttpPost("availability")]
        public IActionResult CreateAvailability(Disponibilidad disponibilidad)
        {
            _context.Disponibilidades.Add(disponibilidad);

            _context.SaveChanges();

            return Ok(disponibilidad);
        }

        [HttpPost("appointment")]
        public IActionResult CreateAppointment(Cita cita)
        {
            _context.Citas.Add(cita);

            _context.SaveChanges();

            return Ok(cita);
        }

        [HttpGet("appointments")]
        public IActionResult GetAppointments()
        {
            var citas = _context.Citas.ToList();

            return Ok(citas);
        }
    }
}

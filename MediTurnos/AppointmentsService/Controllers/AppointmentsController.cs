using AppointmentsService.Data;
using AppointmentsService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public IActionResult CreateAvailability([FromBody] Disponibilidad disponibilidad)
        {
            _context.Disponibilidades.Add(disponibilidad);

            _context.SaveChanges();

            return Ok(disponibilidad);
        }
        
        [HttpGet("availability")]
        public IActionResult GetAvailability()
        {
            return Ok(_context.Disponibilidades.ToList());
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
        [HttpPut("{id}/cancel")]
        public async Task<IActionResult> CancelAppointment(int id)
        {
            var appointment = await _context.Citas.FindAsync(id);

            if (appointment == null)
                return NotFound("La cita no existe.");

            appointment.Estado = "Cancelada";

            await _context.SaveChangesAsync();

            return Ok(new
            {
                mensaje = "Cita cancelada correctamente",
                cita = appointment
            });
        }
        [HttpPut("{id}/confirm")]
        public async Task<IActionResult> ConfirmAppointment(int id)
        {
            var appointment = await _context.Citas.FindAsync(id);

            if (appointment == null)
                return NotFound();

            appointment.Estado = "Confirmada";

            await _context.SaveChangesAsync();

            return Ok(appointment);
        }
        [HttpGet("active")]
        public async Task<IActionResult> GetActiveAppointments()
        {
            var citas = await _context.Citas
                .Where(c => c.Estado != "Cancelada")
                .ToListAsync();

            return Ok(citas);
        }
    }
}

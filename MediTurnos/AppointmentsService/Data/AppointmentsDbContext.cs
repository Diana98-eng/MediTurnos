using Microsoft.EntityFrameworkCore;
using AppointmentsService.Models;

namespace AppointmentsService.Data
{
    public class AppointmentsDbContext : DbContext
    {
        public AppointmentsDbContext(
            DbContextOptions<AppointmentsDbContext> options)
            : base(options)
        {
        }

        public DbSet<Cita> Citas { get; set; }

        public DbSet<Disponibilidad> Disponibilidades { get; set; }
    }
}

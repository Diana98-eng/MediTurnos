using System.ComponentModel.DataAnnotations;
namespace AppointmentsService.Models
{
    public class Cita {

        [Key]
        public int IdCita { get; set; }

        public int IdPaciente { get; set; }

        public int IdDoctor { get; set; }

        public DateTime Fecha { get; set; }

        public TimeSpan Hora { get; set; }

        public string Estado { get; set; }
    }
}

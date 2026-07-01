using System.ComponentModel.DataAnnotations;
namespace AppointmentsService.Models
{
    public class Disponibilidad
    {
        public int IdDisponibilidad { get; set; }
        public int IdDoctor { get; set; }

        public DateTime Fecha { get; set; }

        public TimeSpan HoraInicio { get; set; }

        public TimeSpan HoraFin { get; set; }

    }
}
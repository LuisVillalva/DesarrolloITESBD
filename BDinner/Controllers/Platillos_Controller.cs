using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BDinner.Controllers
{
    public class Platillos_Controller : ApiController
    {
        public int PLA_ID { get; set; }
        public string PLA_NOMBRE { get; set; }

        public string PLA_RESENA { get; set; }
        public int PLA_PRECIO { get; set; }
        public string PLA_INGREDIENTES { get; set; }
        public decimal PLA_PICANTE { get; set; }
        public bool PLA_PIMIENTA { get; set; }
        public string PLA_FOTO { get; set; }
        public int RES_ID { get; set; }
    }
}

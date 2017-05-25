using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BDinner.Controllers
{
    public class Vinos_Controller : ApiController
    {
        public int VIN_ID { get; set; }
        public string VIN_NOMBRE { get; set; }
        public string VIN_VARIEDAD { get; set; }
        public string VIN_ORIGRN_VAR { get; set; }
        public string VIN_ORIGEN_PRO { get; set; }
        public string VIN_MARIDAJE { get; set; }
        public int VIN_PRECIO { get; set; }
        public decimal VIN_TEMPERATURA { get; set; }
        public int VIN_CATEGORIA { get; set; }
        public bool VIN_RELACION { get; set; }
        public string VIN_NOTAS { get; set; }
        public string VIN_FOTOS { get; set; }
        public string VIN_FERMENTACION { get; set; }
        public decimal VIN_GRADUACION { get; set; }
        public int RES_ID { get; set; }
    }
}

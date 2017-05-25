using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BDinner.Controllers
{
    public class Bebidas_Controller : ApiController
    {
        public int BEB_ID { get; set; }
        public string BEB_NOMBRE { get; set; }
        public string BEB_RESENA { get; set; }
        public int BEB_PRECIO { get; set; }
        public string BEB_INGREDIENTES { get; set; }
        public decimal BEB_TEMPERATURA { get; set; }
        public int BEB_CATEGORIA { get; set; }
        public int BEB_RELACION { get; set; }
        public string BEB_FOTO { get; set; }

        public int RES_ID { get; set; }
    }
}

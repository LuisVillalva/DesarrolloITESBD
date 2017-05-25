using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BDinner.Controllers
{
    public class IndexController : Controller
    {
        //
        // GET: /Index/
        public ActionResult Index()
        {

            return View();
        }
        public ActionResult Respuesta(Object json)
        {

            //var jsonApi = JSON.stringify(json);
            System.Diagnostics.Debug.WriteLine(json);
            return View();
        }
        public ActionResult Restaurante()
        {
            return View();
        }
        public ActionResult Platillo()
        {
            return View();
        }
        public ActionResult Bebidas()
        {
            return View();
        }
        public ActionResult Vinos()
        {
            return View();
        }
	}
}
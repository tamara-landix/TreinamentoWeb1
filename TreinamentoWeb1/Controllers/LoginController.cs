using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TreinamentoWeb1.Models.DataContract;
using TreinamentoWeb1.Models.Entity;

namespace TreinamentoWeb1.Controllers
{
    public class LoginController : Controller
    {
        private readonly treinamentowebEntities db = new treinamentowebEntities();

        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        // Post no http
        [HttpPost]
        // Valida mesmo atráves de requisições externas (camada de segurança a mais)
        [ValidateAntiForgeryToken]
        public ActionResult Login(Login login)
        {
            if(ModelState.IsValid)
            {
                var user = db.users.Where(u => u.email == login.Username && u.password == login.Password);

                if(user.Any())
                {
                    Session["user"] = user.First();

                    return RedirectToAction("Index", "Users");
                }

                ModelState.AddModelError(String.Empty, "Usuário ou senha incorretos!");
            }

            return View("Index", login);
        }

        public ActionResult Logout()
        {
            Session.Abandon();

            return View("Index");
        }
    }
}
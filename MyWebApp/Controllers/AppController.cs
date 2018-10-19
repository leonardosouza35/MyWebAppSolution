using Microsoft.AspNetCore.Mvc;

namespace MyWebApp.Controllers
{
    public class AppController :Controller
    {
        public IActionResult Loja()
        {
            return View();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using MyWebApp.AcessoDados;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProdutoRepository _repository;

        public HomeController(IProdutoRepository repository)
        {
            _repository = repository;
        }

        public IActionResult Index()
        {
            return View();            
        }

        public string Obter()
        {
            return "Teste2";
        }
    }
}

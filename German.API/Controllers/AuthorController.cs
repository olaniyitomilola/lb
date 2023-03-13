using Microsoft.AspNetCore.Mvc;

namespace German.API.Controllers
{
    public class AuthorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

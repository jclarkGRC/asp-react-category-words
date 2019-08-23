using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CategoryWords.Models;

namespace CategoryWords.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameCategoriesController : ControllerBase
    {
        private string[] categories = new[]
        {
            "choose category...","cars", "animals", "names", "movies"
        };

        [HttpGet("[action]")]
        public IEnumerable<Category> Categories()
        {
            var id = 0;
            return Enumerable.Range(0, categories.Length).Select(index => new Category
            {
                Id = id++,
                CategoryName = categories[index]
            });
        }
    }
}
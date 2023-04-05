using Microsoft.AspNetCore.Mvc;
using Mission14_API.Data;
using Mission14API.Data;
using System.Runtime.InteropServices;
using System.Security.Cryptography.X509Certificates;

namespace Mission14API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        private MovieDbContext context; 
        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {

            return context.Movies.ToArray();
        }

    }
}

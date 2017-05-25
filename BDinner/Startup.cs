using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BDinner.Startup))]
namespace BDinner
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

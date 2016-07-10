using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace Vanilla.Starter
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseStartup<Startup>();

            const string launchSettingsPath = "./Properties/launchSettings.json";
            if (File.Exists(launchSettingsPath))
            {
                string contents = File.ReadAllText(launchSettingsPath);
                var launchSettings = JsonConvert.DeserializeObject<LaunchSettings>(contents);
                var launchUrls = launchSettings.Profiles["Vanilla.Starter"].LaunchUrl;

                builder = builder.UseUrls(launchUrls);
            }

            var host = builder.Build();

            host.Run();
        }
    }

    class LaunchSettings
    {
        [JsonProperty("profiles")]
        public Dictionary<string, Profile> Profiles { get; set; }
    }

    class Profile
    {
        [JsonProperty("launchUrl")]
        public string LaunchUrl { get; set; }
    }
}

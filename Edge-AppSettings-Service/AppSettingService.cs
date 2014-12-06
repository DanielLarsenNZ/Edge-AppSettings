using System;
using System.Threading.Tasks;

namespace EdgeAppSettingsService
{
    public class AppSettingService
    {
        public async Task<object> Invoke(object input)
        {
            string key = (string)input;
            if (string.IsNullOrEmpty(key)) throw new ArgumentNullException("input");

            string value = System.Configuration.ConfigurationManager.AppSettings[key];
            if (string.IsNullOrEmpty(value)) throw new InvalidOperationException(key + " is empty or missing.");
            return value;
        }
    }
}

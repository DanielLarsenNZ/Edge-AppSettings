using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EdgeAppSettingsService
{
    public class TestService
    {
        public async Task<object> Invoke(dynamic input)
        {
            string value = System.Configuration.ConfigurationManager.AppSettings["AnAppSetting"];
            if (string.IsNullOrEmpty(value)) throw new InvalidOperationException("AnAppSetting is empty or missing.");
            return value;
        }
    }
}

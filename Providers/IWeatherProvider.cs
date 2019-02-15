using System.Collections.Generic;
using aspnetcore_vue.Models;

namespace aspnetcore_vue.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}

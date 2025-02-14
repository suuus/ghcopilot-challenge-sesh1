import { getWeatherInfo, WeatherInfo } from './weather';

describe('getWeatherInfo', () => {
    test('should return weather data for London', async () => {
        const weather = await getWeatherInfo('London');
        expect(weather).toMatchObject({
            cityName: 'London',
            temperature: expect.any(Number),
            description: expect.any(String),
            humidity: expect.any(Number),
            windSpeed: expect.any(Number)
        });
    });

    test('should be case insensitive', async () => {
        const weather = await getWeatherInfo('TOKYO');
        expect(weather.cityName).toBe('Tokyo');
    });

    test('should throw error for invalid city', async () => {
        await expect(getWeatherInfo('InvalidCity'))
            .rejects
            .toThrow('Weather data not found for city: InvalidCity');
    });

    test('should return consistent data structure', async () => {
        const cities = ['London', 'New York', 'Tokyo'];
        
        for (const city of cities) {
            const weather = await getWeatherInfo(city);
            expect(weather).toEqual(expect.objectContaining({
                temperature: expect.any(Number),
                description: expect.any(String),
                humidity: expect.any(Number),
                windSpeed: expect.any(Number),
                cityName: expect.any(String)
            }));
        }
    });
});
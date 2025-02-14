export interface WeatherInfo {
    temperature: number;
    description: string;
    humidity: number;
    windSpeed: number;
    cityName: string;
}

// Mock data to simulate API responses
const mockWeatherData: Record<string, WeatherInfo> = {
    'london': {
        temperature: 15,
        description: 'Cloudy with light rain',
        humidity: 80,
        windSpeed: 12,
        cityName: 'London'
    },
    'new york': {
        temperature: 22,
        description: 'Sunny',
        humidity: 65,
        windSpeed: 8,
        cityName: 'New York'
    },
    'tokyo': {
        temperature: 20,
        description: 'Clear sky',
        humidity: 70,
        windSpeed: 5,
        cityName: 'Tokyo'
    }
};

export async function getWeatherInfo(city: string): Promise<WeatherInfo> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const normalizedCity = city.toLowerCase();
    const weatherData = mockWeatherData[normalizedCity];
    
    if (!weatherData) {
        throw new Error(`Weather data not found for city: ${city}`);
    }
    
    return weatherData;
}
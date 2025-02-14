// Define types for the weather information
export interface WeatherInfo {
    // TODO: Define the properties for weather information
    // Consider including: temperature, description, humidity, etc.
}

// Implement a function to fetch weather information for a given city
export async function getWeatherInfo(city: string): Promise<WeatherInfo> {
    // TODO: Implement the weather fetching logic
    // Tips:
    // - Use fetch API to make HTTP requests
    // - Handle API response and errors appropriately
    // - Parse the JSON response into WeatherInfo type
    
    // For testing without API, you can return mock data:
    throw new Error('Not implemented');
}

// Optional: Add helper functions for data transformation
// TODO: Implement any helper functions needed
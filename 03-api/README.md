# Challenge 3: Weather API Integration

## Task
Create a simple weather information fetcher using a public API.

## Instructions
1. Open `weather.ts` in this folder
2. Implement a function `getWeatherInfo(city: string): Promise<WeatherInfo>` that fetches weather data
3. Use the free OpenWeatherMap API (no API key required for this challenge)
4. Create appropriate types for the weather information

## Success Criteria
- Successfully fetch and parse weather data
- Proper error handling for failed requests
- TypeScript types/interfaces for the response data

## Tips
- Start with comments describing the API endpoint and response structure
- Break down the fetch and parse operations into clear steps
- Use type annotations in comments to get better type suggestions

## Example Usage
```typescript
interface WeatherInfo {
    temperature: number;
    description: string;
    humidity: number;
}

// Example call
getWeatherInfo("London")
    .then(info => console.log(info))
    .catch(error => console.error(error));
```

Note: For this challenge, focus on the structure and types. The actual API calls can be simulated with mock data if API setup takes too long.
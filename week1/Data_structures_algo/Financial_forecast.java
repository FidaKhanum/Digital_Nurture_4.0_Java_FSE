package week1.Data_structures_algo;

public class Financial_forecast {

    // Recursive method to forecast future value
    public static double forecastValue(int year, double currentValue, double growthRate) {
        // Base case: if year is 0, return the current value
        if (year == 0) {
            return currentValue;
        }
        // Recursive case: forecast for (year - 1) and apply growth
        return forecastValue(year - 1, currentValue, growthRate) * (1 + growthRate);
    }

    public static void main(String[] args) {
        // Example setup
        double initialValue = 1000.0; // starting value
        double annualGrowthRate = 0.10; // 10% growth
        int forecastYears = 5; // forecast for 5 years

        double result = forecastValue(forecastYears, initialValue, annualGrowthRate);
        System.out.printf("Forecast value after %d years: %.2f\n", forecastYears, result);
    }
}

package week1.Design_pattern_principles;

public class Logger {
	
    // Step 1: Create a private static instance
	private static Logger instance;

    // Step 2: Private constructor
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // Step 3: Public static method to return the instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Logger method
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}

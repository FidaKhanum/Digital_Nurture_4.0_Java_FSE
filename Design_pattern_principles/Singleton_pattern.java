package week1.Design_pattern_principles;

public class Singleton_pattern {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        // Log messages
        logger1.log("This is the first message.");
        logger2.log("This is the second message.");

        // Verify if both instances are the same
        System.out.println("logger1 hash: " + logger1.hashCode());
        System.out.println("logger2 hash: " + logger2.hashCode());

        if (logger1 == logger2) {
            System.out.println("Singleton is working. Both are the same instance.");
        } else {
            System.out.println("Singleton failed. Different instances.");
        }
	}

}

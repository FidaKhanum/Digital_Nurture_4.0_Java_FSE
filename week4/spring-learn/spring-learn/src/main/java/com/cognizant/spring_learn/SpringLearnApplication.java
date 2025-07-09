package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

    public static void displayCountry() {
        // Load the XML configuration
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        // Get the country bean from context
        Country country = (Country) context.getBean("country", Country.class);
        System.out.println("Country: " + country);  // This will use the toString() of Country.java
    }

    public static void main(String[] args) {
        displayCountry();
        SpringApplication.run(SpringLearnApplication.class, args); // Still runs your Boot app!
    }
}
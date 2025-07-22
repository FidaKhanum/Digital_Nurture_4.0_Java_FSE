package com.cognizant.spring_learn.controller;

import com.cognizant.spring_learn.Country;
import org.springframework.web.bind.annotation.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import java.util.List;

@RestController
public class CountryController {

    @GetMapping("/country")
    public Country getCountryIndia() {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = (Country) context.getBean("country", Country.class);
        return country;
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countryList = (List<Country>) context.getBean("countryList");
        for (Country country : countryList) {
            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }
        // Optionally: throw a 404 if not found, for now just return null
        return null;
    }
}